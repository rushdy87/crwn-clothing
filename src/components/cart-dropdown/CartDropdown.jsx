import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import { CartItem, Button } from '../';

import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button buttonType="">cheakout</Button>
    </div>
  );
};

export default CartDropdown;
