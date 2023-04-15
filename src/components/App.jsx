import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
      name: '',
      number: '',
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            valueName={name}
            valueNumber={number}
            onNameChange={this.handleNameChange}
            onNumberChange={this.handleNumberChange}
            onSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts">
          <FilterContacts value={filter} handleFilter={this.handleFilter} />
          <ContactsList items={visibleContacts} />
        </Section>
      </>
    );
  }
}

export default App;
