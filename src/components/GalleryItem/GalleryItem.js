import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
      <div>
        <h2>Hello from GalleryItem</h2>
        <img src={this.props.image.path} alt="goat"/>
        <h2>{this.props.image.description}</h2>
        <h2>{this.props.image.likes}</h2>
      </div>
    );
  }
}

export default GalleryItem;
