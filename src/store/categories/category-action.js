import { createAction } from '../../utils/reducer';
import { CATEGORY_ACTION_TYPES } from './category-types';
import { getCategoriesAndDocuments } from '../../utils/firebase';

const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

const fetchCategoriesFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
