import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Layout } from './Style/Layout';

export class App extends Component {
  state = {
    imgName: '',
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  // componentDidMount() {
  //   const contactsMount = JSON.parse(localStorage.getItem('contacts'));
  //   if (contactsMount) {
  //     this.setState({ contacts: contactsMount });
  //   }
  // }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />
      </>
    );
  }
}
