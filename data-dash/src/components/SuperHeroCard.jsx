import React from "react";

const SuperheroCard = ({ superhero }) => {
    return (
      <div className="superhero-card">
        <img src={`${superhero.thumbnail.path}.${superhero.thumbnail.extension}`} alt={superhero.name} />
        <h3>{superhero.name}</h3>
      </div>
    );
  };
  
export default SuperheroCard;