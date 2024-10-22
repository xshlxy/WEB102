import React from "react";
import './Card.css';

const Card = ({ title, value, description }) => {
    return (
      <div className="stat-card">
        <h3>{title}</h3>
        <p className="value">{value}</p>
        {description && <p className="description">{description}</p>}
      </div>
    );
  };
  
  export default Card;