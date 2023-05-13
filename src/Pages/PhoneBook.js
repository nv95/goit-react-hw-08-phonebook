import ContactForm from 'components/ContactForm/ContactForm';
import React from 'react';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Phonebook() {
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
