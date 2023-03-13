import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';
import { signOutUser } from '../../utils/firebase';

import { CartIcon, CartDropdown } from '../../components';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
