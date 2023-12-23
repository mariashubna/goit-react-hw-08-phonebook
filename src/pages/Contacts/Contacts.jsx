import React from 'react';
import ClientName from '../../components/ClientName/ClientName';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={css.contactsContainer}>
      <h2>Phonebook App</h2>
      <ClientName />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;