import { Filter } from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';
import ClientName from '../../components/ClientName/ClientName';
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <ClientName />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
