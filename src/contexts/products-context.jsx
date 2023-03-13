import { createContext, useState, useEffect } from 'react';

import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({ products: [] });

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
