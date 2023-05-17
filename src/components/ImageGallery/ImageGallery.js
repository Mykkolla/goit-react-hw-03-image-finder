import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';
// import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      console.log('change');
      this.fetchImages();
    }
  }
  fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=35143561-a246dd3ff16ac48132d2e40aa&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: response.data.hits });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { images } = this.state;
    return (
      <ul>
        <p>{this.props.imgName}</p>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
