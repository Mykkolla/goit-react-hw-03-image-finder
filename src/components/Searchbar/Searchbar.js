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

    this.props.onSubmit(this.state.imgName.trim());

    this.setState({ imgName: '' });
  };

  render() {
    // const { name, number } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
