import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      {isLoggedIn && <NavLink to="/phoneBook"> PhoneBook </NavLink>}
    </nav>
  );
};
