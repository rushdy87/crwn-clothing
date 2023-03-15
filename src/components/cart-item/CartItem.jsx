import { CartItemContainer, ItemDetails } from './CartItem.styles';

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
