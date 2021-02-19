import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, categoryName }) => {
  return (
    <div className="categories">
      <h2 className="categories__title">{categoryName}</h2>
      {children}
    </div>
  );
};
export default Categories;
