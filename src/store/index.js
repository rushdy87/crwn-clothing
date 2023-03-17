import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

// For Centralization
// USER
export { setCurrentUser } from './user/user-action';
export { selectCurrentUser } from './user/user-selector';

// CTEGORIES
export { setCategoriesMap } from './categories/category-action';
export { selectCategoriesMap } from './categories/category-selector';
