import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export const Header = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = Boolean(name);

  return (
    <header>
      <Navigation isLoggedIn={isLoggedIn} />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};