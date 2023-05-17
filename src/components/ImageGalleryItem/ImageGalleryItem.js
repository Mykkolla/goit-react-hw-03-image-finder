import React from 'react';
import '../../styles.css';

const ImageGalleryItem = ({ webformatURL, key, onClick }) => {
  return (
    <li className="ImageGalleryItem" key={key}>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
