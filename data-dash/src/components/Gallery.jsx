import React from 'react';
import RecipeCard from './RecipeCard';

const Gallery = ({ recipes }) => {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Gallery;