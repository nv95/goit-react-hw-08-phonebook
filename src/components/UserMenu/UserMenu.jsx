import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/user/operation';
import { ContainerLogIn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(state => state.user.user.email);

  return (
    <ContainerLogIn>
      <Typography
        style={{ marginRight: 20 }}
        typography="h5"
        color="blue"
        component="p"
      >
        Welcome : {userMail}
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
