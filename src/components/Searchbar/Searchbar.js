import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../../styles.css';

export class Searchbar extends Component {
  state = {
    imgName: '',
  };

  handleChange = event => {
    this.setState({ imgName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imgName.trim() === '') {
      alert('No name input');
      return;
    }
    this.props.onSubmit(this.state.imgName.trim());
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.imgName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
