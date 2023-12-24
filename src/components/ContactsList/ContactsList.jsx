import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contactsSlice';
import { useEffect } from 'react';
import css from './ContactsList.module.css';
import { Loader } from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter.toLowerCase());

  const contacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
  
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <ul className={css.list}>
          {contacts.map(contact => (
            <li className={css.item} key={contact.id}>
              <div className={css.contactInfo}>
                <span className={css.contactName}>{contact.name}:</span>
                <span className={css.contactNumber}>{contact.number}</span>
              </div>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContact(contact.id))}
                disabled={isLoading}
              >
                {isLoading ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
