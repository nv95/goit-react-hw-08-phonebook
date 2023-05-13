import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(state => state.user.isRefreshing);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  // const isRefreshing = useSelector(state => state.auth.isRefreshing);
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
