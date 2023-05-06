import Phonebook from 'Pages/PhoneBook';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'store/user/operation';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../Pages/Home'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.user.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p> Refreshing user .... </p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
