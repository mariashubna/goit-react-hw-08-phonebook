import { Filter } from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';

const ContactsPage = () => {
  
  return (
    <div>
      <Filter />
      <div>
        <h2>Contacts</h2>
        <button
          type="button"
          aria-label="Add Contact"
        >
        </button>
      </div>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;