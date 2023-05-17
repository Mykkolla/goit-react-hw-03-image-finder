import React from 'react';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image }) => (
  <li className="gallery-item">
    <img src={image.webformatURL} alt="search result" />
  </li>
);

export default ImageGalleryItem;
