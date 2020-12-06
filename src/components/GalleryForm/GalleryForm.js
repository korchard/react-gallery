import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import { StylesProvider } from "@material-ui/core/styles";
import './GalleryForm.css';

class GalleryForm extends Component {

    // local state, needed to make newImage to send to POST route
    state = {
        galleryList: [],
        newImage: {
            path: '',
            alt: '',
            description: '',
            date: ''
        }
      }

    // need to pass the event as an arguement here because it needs to be stored
    createImage = (event, propertyName) => { // takes input of what is put in input boxes & the second arguement of property name
        console.log('Creating the image', event.target.value)
        this.setState({
          newImage: {
            ...this.state.newImage, // this is taking what was put in the other input boxes and keeping them
            [propertyName]: event.target.value // this is setting the value to the argument of property name passed in
          } 
        }) // sets input boxes 
      } // end createImage function

      handleEvent = (event) => { // this is just emptying the input values once the form is completed
          event.preventDefault();
          this.setState({
            newImage: {
                path: '',
                alt: '',
                description: '',
                date: ''
            } 
          }) // sets the object to empty
      } // end handleEvent function

  render() {
    return (
      <div>
          <StylesProvider injectFirst>
            {/* the onSubmit handles emptying the input values - the createImage creates the newImage object and the 
            addImage function in the button sends the object through the POST route to the DB */}
             <form onSubmit={this.handleEvent}> 
                <InputLabel htmlFor="path" className="inputBox">URL Path:</InputLabel> 
                <Input type="url" value={this.state.newImage.path}
                    onChange={(event) => this.createImage(event, 'path')} id="path" className="inputBox"/>
                <InputLabel htmlFor="alt" className="inputBox">Alt:</InputLabel>
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
    ); // end return
  } // end render function
} // end Component

export default GalleryForm;
