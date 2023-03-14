import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const cleearItemHandler = () => clearItemFromCart(cartItem);

  const increaseItemHandler = () => addItemToCart(cartItem);

  const decreaseItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container ">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={cleearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
