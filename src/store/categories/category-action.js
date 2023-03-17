import { createAction } from '../../utils/reducer';
import { CATEGORY_ACTION_TYPES } from './category-types';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
