import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/authSlice';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p> {name} </p>
      <button type="button" aria-label="Logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
