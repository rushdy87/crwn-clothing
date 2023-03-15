import { Link } from 'react-router-dom';
import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link to={`shop/${title}`} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
