import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import '../styles.css';

export class App extends Component {
  state = {
    imgName: '',
  };

  handleSearchSubmit = query => {
    this.setState({ imgName: query });
  };

  render() {
    const { imgName } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery imgName={imgName} />
      </div>
    );
  }
}
