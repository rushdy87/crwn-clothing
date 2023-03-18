import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store';
import { ProductCard } from '../../components';

import { CategoryContainer, Title } from './Category.styles';

const Category = () => {
  console.log('Render/Rerendering Category Component');

  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('Effect fired calling setProducts');
    setproducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
