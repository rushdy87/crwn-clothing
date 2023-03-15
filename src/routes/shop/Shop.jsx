import { Routes, Route } from 'react-router-dom';

import { CategoriesPreview, Category } from '..';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
