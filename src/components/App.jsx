import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'store/user/operation';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../Pages/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const PhoneBookPage = lazy(() => import('../Pages/PhoneBook'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p> Refreshing user .... </p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phoneBook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phoneBook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/phoneBook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
