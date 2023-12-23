import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ClientName.module.css';

const ClientName = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const allContacts = useSelector((state) => state.contacts.items);
  

  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isNameUnique = (name) => {
    return !allContacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = formData;

    if (!isLoading && isNameUnique(name)) {
      dispatch(addContact({ userId: user.id, newContact: { name, number } }));
      setFormData({ name: '', number: '' });
    } else {
      alert('Contact with this name already exists.');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {/* Input fields and form structure */}
      <label className={css.label}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label className={css.label}>
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={css.btn} type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ClientName;