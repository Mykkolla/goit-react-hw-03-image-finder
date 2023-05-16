import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import ContactList from './ContactList/ContactList';
// import { Layout } from './Style/Layout';

export class App extends Component {
  state = {
    imgName: '',
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('add');
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  // componentDidMount() {
  //   const contactsMount = JSON.parse(localStorage.getItem('contacts'));
  //   if (contactsMount) {
  //     this.setState({ contacts: contactsMount });
  //   }
  // }

  render() {
    return <Searchbar onSubmit={this.handleFormSubmit} />;
  }
}
