import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setIsCartOpen, selectCartItems } from '../../store';

import { CartItem, Button } from '../';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>cheakout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
