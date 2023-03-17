export const selectCategoriesMap = (state) =>
  state.categories.categories.reduce((accumulator, currentCategory) => {
    const { title, items } = currentCategory;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
