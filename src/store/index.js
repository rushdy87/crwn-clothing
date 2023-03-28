// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

// For Centralization
// USER
export { setCurrentUser } from './user/user-reducer';
export { selectCurrentUser } from './user/user-selector';

// CTEGORIES
export { setCategories } from './categories/category-reducer';
export { selectCategoriesMap } from './categories/category-selector';

// CART
export {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from './cart/cart-reducer';
export {
  selectCartItems,
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal,
} from './cart/cart-selector';
