import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/contactsSlice';
import { useEffect } from 'react';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const filter = useSelector((state) => state.filter.filter.toLowerCase());

  const contacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading contacts...</p>}
      {!isLoading && (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
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