import React from 'react';
import '../../styles.css';
const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
