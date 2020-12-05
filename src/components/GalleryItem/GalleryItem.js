import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { StylesProvider } from "@material-ui/core/styles";
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
       <StylesProvider injectFirst>
        <Card className="card">
        <Button onClick={() => this.props.removeImage(this.props.image.id)} className="heart">x</Button>
        <br/>
            {this.state.image ? <Button onClick={this.toggleImage}>
            <img src={this.props.image.path} alt={this.props.image.alt} className="imageBox"/></Button> : 
            <Button onClick={this.toggleImage} className="imageBox">{this.props.image.description}</Button>
        }
       
            <br/>
            <Button onClick={() => this.props.addLoves(this.props.image.id)} className="heart">&hearts;</Button>
            <p className="text">{this.props.image.likes} people love this image!</p>
            </Card>
            </StylesProvider>
      </div>
    );
  }
}

export default GalleryItem;
