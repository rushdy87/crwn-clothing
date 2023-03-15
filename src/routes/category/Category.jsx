import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProductCard } from '../../components';

import { CategoriesContext } from '../../contexts/categories-context';

import './Category.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setproducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h1 className="category-title">{category.toUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
