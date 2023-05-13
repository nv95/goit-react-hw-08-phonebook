import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/user/operation';
import { ContainerLogIn } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <ContainerLogIn>
      <Typography
        style={{ marginRight: 20 }}
        typography="h5"
        color="blue"
        component="p"
      >
        Welcome : {user}
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </ContainerLogIn>
  );
};
