import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css'

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(formData));
      navigate('/contacts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}> Sign in </h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Email:</label>
        <input className={css.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>Password:</label>
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