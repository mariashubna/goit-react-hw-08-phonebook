import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const authState = useSelector((state) => state.auth);
  const user = authState ? authState.user : null;

  return (
    <nav>
      {user ? (
        <UserMenu />
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;