import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories-context';

import { CategoryPreview } from '../../components';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
