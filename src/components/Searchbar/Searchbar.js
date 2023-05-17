import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../../styles.css';

export class Searchbar extends Component {
  state = {
    imgName: '',
  };

  handleChange = event => {
    // const { name, value } = event.target;
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
    // const { name, number } = this.state;
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
