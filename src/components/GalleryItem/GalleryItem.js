import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

    state ={
        image: true
    }

    toggleImage = () => {
        this.setState({ 
            image: !this.state.image 
        })
    }

  render() {
    return (
      <div className="galleryImages">
       
        <p>{this.state.image ? <button onClick={this.toggleImage}>
            <img src={this.props.image.path} alt={this.props.image.alt} className='imageBox'/></button> : 
            <button onClick={this.toggleImage}>{this.props.image.description}</button>
        }</p>
       
            <br/>
            <button onClick={(event) => this.props.addLoves(event, this.props.image.id)}>&hearts;</button>
        <h2>{this.props.image.likes} people love this image!</h2>
      </div>
    );
  }
}

export default GalleryItem;
