import { Link } from './Navigation.styled';
import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      {isLoggedIn && (
        <Link to="/phoneBook">
          <Button variant="contained" color="success">
            PhoneBook
          </Button>
        </Link>
      )}
    </nav>
  );
};
