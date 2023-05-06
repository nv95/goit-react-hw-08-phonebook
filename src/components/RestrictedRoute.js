import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
