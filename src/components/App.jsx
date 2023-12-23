import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import css from './App.module.css';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}> {/* Wrap your component tree with Provider */}
      <Router>
        <div className={css.container}>
          <h1>Phonebook App</h1>
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};