import React from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

const Gallery = ({ recipes }) => {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;