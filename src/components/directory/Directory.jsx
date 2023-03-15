import { DirectoryItem } from '../';

import { DirectoryContainer } from './Directory.styles';

import { categories } from '../../utils/categories-details';

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
