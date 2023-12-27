import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from '../redux/store';
import Layout from './Layout/Layout'; 

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <Provider store={store}>
      <div>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
            </Routes>
      </div>
    </Provider>
  );
};
