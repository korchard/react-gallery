import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {

  state = {
    galleryList: [],
  };

  // POST ROUTE
  addImage = (newImage) => {

    axios.post('/gallery', newImage)
    .then( (response) => {
      console.log('Response:', response); 
      this.getGallery() 
    })
    .catch( (error)=> {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  }

  // PUT ROUTE
  addLoves = (event, id) => { 
    console.log('id', id);
  
      axios.put(`/gallery/like/${id}`)
      .then( (response) => {
        console.log('Response:', response); 
        this.getGallery() 
      })
      .catch( (error)=> {
        alert('Something bad happened...');
        console.log('Bad news bears', error);
      })
    }

  componentDidMount() {
    this.getGallery();
  }

  // GET ROUTE
  getGallery = () => {
    console.log('in getGallery');

    axios.get('/gallery')
    .then((response) => {
      console.log('Got the things...', response.data);
      this.setState({
        galleryList: response.data
      })
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryForm addImage={this.addImage}/>
        <GalleryList galleryList={this.state.galleryList} addLoves={this.addLoves}/>
      </div>
    );
  }
}

export default App;
