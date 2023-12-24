import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authSlice';
import css from './RegistrationForm.module.css'


export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign up</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name:</label>
        <input className={css.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label className={css.label}>Email:</label>
        <input className={css.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label className={css.label}>Password:</label>
        <input className={css.input}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className={css.button} type="submit">Continue</button>
      </form>
    </div>
  );
};
