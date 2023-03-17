import { createAction } from '../../utils/reducer';
import { CATEGORY_ACTION_TYPES } from './category-types';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
