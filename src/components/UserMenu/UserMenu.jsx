import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/user/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(state => state.user.user.email);

  return (
    <div>
      <p> Welcome :{userMail}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
