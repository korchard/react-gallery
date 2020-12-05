import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import { StylesProvider } from "@material-ui/core/styles";
import './GalleryForm.css';

class GalleryForm extends Component {

    state = {
        galleryList: [],
        newImage: {
            path: '',
            alt: '',
            description: '',
            date: ''
        }
      }

    createImage = (event, propertyName) => { 
        console.log('Creating the image', event.target.value)
        this.setState({
          newImage: {
            ...this.state.newImage,
            [propertyName]: event.target.value 
          }
        })
      }

      handleEvent = (event) => {
          event.preventDefault();
          this.setState({
            newImage: {
                path: '',
                alt: '',
                description: '',
                date: ''
            }
          })
      }

  render() {
    return (
      <div>
          <StylesProvider injectFirst>
             <form onSubmit={this.handleEvent}>
                <InputLabel htmlFor="path" className="inputBox">Image Path:</InputLabel> 
                <Input type="url" value={this.state.newImage.path}
                    onChange={(event) => this.createImage(event, 'path')} id="path" className="inputBox"/>
                <InputLabel htmlFor="alt" className="inputBox">Alternative Text for Image:</InputLabel>
                <Input type="text" value={this.state.newImage.alt}
                    onChange={(event) => this.createImage(event, 'alt')} id="alt" className="inputBox"/>
                <InputLabel htmlFor="description" className="inputBox">Description:</InputLabel>
                <Input type="text" maxLength="1000" value={this.state.newImage.description}
                    onChange={(event) => this.createImage(event, 'description')} id="description" className="inputBox"/>
                <InputLabel htmlFor="year" className="inputBox">Year:</InputLabel>
                <Input type="text" value={this.state.newImage.date}
                    onChange={(event) => this.createImage(event, 'date')} id="year" className="inputBox"/>
                <Button onClick={() => this.props.addImage(this.state.newImage)}>&#43;</Button>
            </form>
        </StylesProvider>
      </div>
    );
  }
}

export default GalleryForm;
