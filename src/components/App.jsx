import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts, name, number } = this.state;
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
          <ContactsList items={contacts}></ContactsList>
        </Section>
      </>
    );
  }
}

export default App;
