import React from 'react';
import '../../styles.css';

const ImageGalleryItem = ({ webformatURL, id, onClick }) => {
  return (
    <li className="ImageGalleryItem">
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
