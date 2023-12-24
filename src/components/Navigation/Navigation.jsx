import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <ul className={css.list}>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink className={css.link} to="/register">
              Sign up
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/login">
              Sign in
              </NavLink>
            </li>
          </>
        )}

        {isLoggedIn && (
          <li>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
