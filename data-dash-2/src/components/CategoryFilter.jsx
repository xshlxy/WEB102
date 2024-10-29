import React from 'react';

const CategoryFilter = ({ filterRecipes }) => {
  const handleCategoryChange = (event) => {
    filterRecipes(event.target.value);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="">All</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="gluten-free">Gluten-Free</option>
      {/* Add more categories as needed */}
    </select>
  );
};

export default CategoryFilter;
