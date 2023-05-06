import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

export default function Phonebook() {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>There are no contacts in the phonebook yet.</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
