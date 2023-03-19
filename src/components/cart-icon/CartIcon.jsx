import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen, selectIsCartOpen, selectCartCount } from '../../store';

import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
