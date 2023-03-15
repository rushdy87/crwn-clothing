import { Link } from 'react-router-dom';

import { ProductCard } from '../';

import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
