import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

// For Centralization
// USER
export { setCurrentUser } from './user/user-action';
export { selectCurrentUser } from './user/user-selector';

// CTEGORIES
export { setCategories } from './categories/category-action';
export { selectCategoriesMap } from './categories/category-selector';
