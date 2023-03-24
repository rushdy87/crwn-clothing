import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['card'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// For Centralization
// USER
export { setCurrentUser, checkUserSession } from './user/user-action';
export { selectCurrentUser } from './user/user-selector';

// CTEGORIES
export { fetchCategoriesStart } from './categories/category-action';
export {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from './categories/category-selector';

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
