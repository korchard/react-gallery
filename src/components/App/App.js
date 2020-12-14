import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

// React interpreter is what compiles all of the code, it compresses it - creates a virtual DOM
// code --> compiler --> virtual DOM --> actual DOM
// code goes into a program - which makes a virtual DOM - anytime the virtual DOM updated and there is a
// discrepency between virual DOM and actual DOM - it triggers the actual DOM to update -- VERY REACTIVE :)

class App extends Component {

  // local state
  state = {
    galleryList: [],
  };

  // POST ROUTE
  addImage = (newImage) => { // sends the newImage from the form
    console.log('in addImage');

    axios.post('/gallery', newImage)
    .then( (response) => {
      console.log('Added an image...', response); 
      this.getGallery() // refreshes the info retrieved from the DB to the DOM
    })
    .catch( (error)=> {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  } // end POST ROUTE

  // PUT ROUTE
  addLoves = (id) => { // sends the id to the DB to determine which item to update
    console.log('in addLoves');
  
      axios.put(`/gallery/like/${id}`)
      .then( (response) => {
        console.log('Updated the loves...', response); 
        this.getGallery() // refreshes the info retrieved from the DB to the DOM
      })
      .catch( (error)=> {
        alert('Something bad happened...');
        console.log('Bad news bears', error);
      })
    } // end PUT ROUTE

  // Component App - this is what we want to plop down on the HTML page when we are finished -
  // like a sticker on the actual DOM - alter the render state below based on what the getGallery
  // function does. The sticker being plopped down is everything under render. This is what gets 
  // called only when the render succeeds. 
  componentDidMount() {
    this.getGallery(); 
  } // end componentDidMount 

  // GET ROUTE
  getGallery = () => {
    console.log('in getGallery');

    axios.get('/gallery')
    .then((response) => {
      console.log('Got the things...', response.data);
      this.setState({
        galleryList: response.data
      }) // sets the state - galleryList to include what is in the DB - which is why we call in each function
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  } // end GET ROUTE

  // DELETE ROUTE
  removeImage = (id) => { // identifys what item to delete in the DB
    console.log('in removeImage');

    axios.delete(`/gallery/${id}`)
    .then((response) => {
      console.log('Removed the image...', response);
      this.getGallery() // refreshes the info retrieved from the DB to the DOM
    })
    .catch((error) => {
      alert('Something bad happened...');
      console.log('Bad news bears', error);
    })
  } // end DELETE ROUTE

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryForm addImage={this.addImage} />
        <GalleryList galleryList={this.state.galleryList} addLoves={this.addLoves} removeImage={this.removeImage}/>
      </div>
    ); // end return
  } // end render function
} // end Component

export default App;
