import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import { Button } from '../';
import { BUTTON_TYPE_CLASSES } from '../../utils/types';

import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
