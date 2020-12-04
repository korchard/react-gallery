import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

  render() {
    return (
      <>
        <h2>Hello from GalleryList</h2>
            { this.props.galleryList.map((image) => 
                <GalleryItem image={image} key={image.id} />
            )}
      </>
    );
  }
}

export default GalleryList;
