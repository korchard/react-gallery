import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

  render() {
    return (
      <>
            { this.props.galleryList.map((image) => 
                <GalleryItem image={image} key={image.id} addLoves={this.props.addLoves} removeImage={this.props.removeImage}/>
            )}
      </>
    );
  }
}

export default GalleryList;

