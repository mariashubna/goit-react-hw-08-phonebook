import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/authSlice';
import css from './UserMenu.module.css';
import cat from '../../images/cat.png';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className={css.userMenuContainer}>      
      <p className={css.userName}>{name}</p>      
      <img className={css.img} src={cat} alt="" /> 
      <button type="button" aria-label="Logout" onClick={handleLogout} className={css.button}>           
        Logout
      </button>          
    </div>
  );
};