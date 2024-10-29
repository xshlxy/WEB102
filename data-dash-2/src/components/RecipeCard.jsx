import React from "react";
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    return (
      <div className="recipe-card">
        {recipe.image && <img src={recipe.image} alt={recipe.title} />}
        <h3>{recipe.title}</h3>
        {/* Add more details as needed */}
      </div>
    );
};
  
export default RecipeCard;
