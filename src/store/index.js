import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

// loggerMiddleware custom logger middleware:
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log('type:', action.type);
//   console.log('payload:', action.payload);
//   console.log('Current State:', store.getState());

//   next(action);

//   console.log('Next State:', store.getState());
// };

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

// For Centralization
// USER
export { setCurrentUser } from './user/user-action';
export { selectCurrentUser } from './user/user-selector';

// CTEGORIES
export { setCategories } from './categories/category-action';
export { selectCategoriesMap } from './categories/category-selector';

// CART
export {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from './cart/cart-action';
export {
  selectCartItems,
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal,
} from './cart/cart-selector';
