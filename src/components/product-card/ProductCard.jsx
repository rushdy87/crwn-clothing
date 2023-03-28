import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store';

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
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

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
