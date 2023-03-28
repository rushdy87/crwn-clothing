import { createSlice } from '@reduxjs/toolkit';

const INTIAL_STATE = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState: INTIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
