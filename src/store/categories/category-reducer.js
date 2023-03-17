import { CATEGORY_ACTION_TYPES } from './category-types';

const INTIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = INTIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
};
