import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store';

import { CategoryPreview, Spinner } from '../../components';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const renderTitlesAndProducts = Object.keys(categoriesMap).map((title) => (
    <CategoryPreview
      title={title}
      products={categoriesMap[title]}
      key={title}
    />
  ));

  return <>{isLoading ? <Spinner /> : renderTitlesAndProducts}</>;
};

export default CategoriesPreview;
