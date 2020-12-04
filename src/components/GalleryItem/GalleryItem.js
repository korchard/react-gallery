import React, { Component } from 'react';

class GalleryItem extends Component {

    state ={
        image: this.props.image.path
    }

    toggleImage = () => {
        console.log('in toggleImage');
        this.setState({
            image: !this.state.image
        })
    }

  render() {
    return (
      <div>
        <h2>Hello from GalleryItem</h2>
        <p>{this.props.image.path ? <button onClick={(event) => this.toggleImage(event, this.props.image.id)}>
            <img src={this.props.image.path} alt="goat"/></button> : 
            <button onClick={(event) => this.toggleImage(event, this.props.image.id)}>{this.props.image.description}</button>
        }</p>
        {/* <button onClick={this.toggleImage}><img src={this.props.image.path} alt="goat"/></button> */}
            <br/>
            <button onClick={(event) => this.props.addLoves(event, this.props.image.id)}>&hearts;</button>
        <h2>{this.props.image.likes} people love this image!</h2>
      </div>
    );
  }
}

export default GalleryItem;
