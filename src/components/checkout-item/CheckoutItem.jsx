import { useDispatch } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store';

import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

  const increaseItemHandler = () => dispatch(addItemToCart(cartItem));

  const decreaseItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
