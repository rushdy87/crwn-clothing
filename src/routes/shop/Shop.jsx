import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { getCategoriesAndDocuments } from '../../utils/firebase';
import { setCategoriesMap } from '../../store';

import { CategoriesPreview, Category } from '..';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const gategoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(gategoryMap));
    };
    getCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
