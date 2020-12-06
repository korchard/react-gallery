import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { StylesProvider } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import './GalleryItem.css';

class GalleryItem extends Component {

    // local state to toggle the image and description
    state ={
        image: true
    }

    toggleImage = () => {
        this.setState({ 
            image: !this.state.image 
        }) // sets the local state to be what it was no previously when the function is called
    } // end toggleImage function

  render() {
    return (
      <div className="galleryImages">
       <StylesProvider injectFirst>
       <Grid container spacing={12}>
        <Card className="card">
        <Button onClick={() => this.props.removeImage(this.props.image.id)} className="heart">x</Button>
        <br/>
        {/* this.state.image is a ternary conditional that says if the local state is true (i.e. the image) than when toggleImage is 
        clicked, change what is displayed to the latter portion of the conditional - what is after the colon */}
            {this.state.image ? <Button onClick={this.toggleImage}>
            <img src={this.props.image.path} alt={this.props.image.alt} className="imageBox"/></Button> : 
            <Button onClick={this.toggleImage} className="imageBox">--- {this.props.image.date} --- <br/> {this.props.image.description}</Button>
        }
       
            <br/>
            <Button onClick={() => this.props.addLoves(this.props.image.id)} className="heart">&hearts;</Button>
            <p className="text">{this.props.image.likes} people love this image!</p>
            </Card>
            </Grid>
            </StylesProvider>
      </div>
    ); // end return
  } // end render function
} // end Component

export default GalleryItem;