import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: [],
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery = () => {
    console.log('in getGallery');

    axios.get('/gallery')
    .then((response) => {
      console.log('got the things...', response.data);
      this.setState({
        galleryList: response.data
      })
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  }

  addLoves = (event, id) => { 
  console.log('id', id);

    axios.put(`/gallery/like/${id}`)
    .then( (response) => {
      console.log('Response:', response); 
      this.getGallery() 
    })
    .catch( (error)=> {
      alert('Something bad happened...');
      console.log('Error', error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryList galleryList={this.state.galleryList} addLoves={this.addLoves}/>
      </div>
    );
  }
}

export default App;
