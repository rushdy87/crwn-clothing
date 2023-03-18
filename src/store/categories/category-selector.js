export const selectCategoriesMap = (state) => {
  console.log('Selector Fired');
  return state.categories.categories.reduce((accumulator, currentCategory) => {
    const { title, items } = currentCategory;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
};
