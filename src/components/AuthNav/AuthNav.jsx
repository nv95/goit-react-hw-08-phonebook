import { Button } from '@mui/material';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">
        <Button variant="outlined">Register</Button>
      </Link>
      <Link to="/login">
        <Button variant="outlined">Log In</Button>
      </Link>
    </div>
  );
};
