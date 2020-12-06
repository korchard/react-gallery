import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@material-ui/core/Grid';

class GalleryList extends Component {

  render() { // loops through the galleryList array and displays them one by one, which is 'image'
    return (
      <>
      <Grid container spacing={4}>
            { this.props.galleryList.map((image) => 
                <GalleryItem image={image} key={image.id} addLoves={this.props.addLoves} removeImage={this.props.removeImage}/>
            )}
      </Grid>
      </>
    ); // end return
  } // end render function
} // end Component

export default GalleryList;

