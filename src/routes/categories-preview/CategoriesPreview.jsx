import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store';

import { CategoryPreview } from '../../components';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const renderTitlesAndProducts = Object.keys(categoriesMap).map((title) => (
    <CategoryPreview
      title={title}
      products={categoriesMap[title]}
      key={title}
    />
  ));

  return <>{renderTitlesAndProducts}</>;
};

export default CategoriesPreview;
