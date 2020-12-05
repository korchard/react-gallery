import React, { Component } from 'react';

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
      <>
        <form onSubmit={this.handleEvent}>
            <label>Image Path:</label> 
            <input type="url" value={this.state.newImage.path}
                onChange={(event) => this.createImage(event, 'path')} />
            <label>Alternative Text for Image:</label>
            <input type="text" value={this.state.newImage.alt}
                onChange={(event) => this.createImage(event, 'alt')} />
            <label>Description:</label>
            <input type="text" maxLength="1000" value={this.state.newImage.description}
                onChange={(event) => this.createImage(event, 'description')} />
            <label>Year:</label>
            <input type="text" value={this.state.newImage.date}
                onChange={(event) => this.createImage(event, 'date')} />
            <button onClick={() => this.props.addImage(this.state.newImage)}>Add</button>
        </form>
      </>
    );
  }
}

export default GalleryForm;
