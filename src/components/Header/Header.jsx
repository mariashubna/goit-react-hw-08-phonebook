import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export const Header = () => {
  const user = useSelector(selectUser);

  const isLoggedIn = Boolean(user);

  return (
    <header>
      <Navigation isLoggedIn={isLoggedIn} />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};