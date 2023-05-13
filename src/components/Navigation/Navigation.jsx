import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';
import { Button } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

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
