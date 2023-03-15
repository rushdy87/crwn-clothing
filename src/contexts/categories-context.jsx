import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase';

export const CategoriesContext = createContext({ categoriesMap: {} });

export const CategoriesContextProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const gategoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(gategoryMap);
    };
    getCategories();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
