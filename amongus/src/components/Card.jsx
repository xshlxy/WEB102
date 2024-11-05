import React from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';

const Card = ({ id, name = "Unknown", speed = "0", color = "N/A" }) => {
  return (
    <div className="Card">
      <Link to={'/more/' + id}>
        <img className="moreButton" alt="more button" src={more} />
      </Link>
      <h2 className="name">{"Name: " + name}</h2>
      <h3 className="speed">{"Speed: " + speed + " mph"}</h3>
      <p className="color">{"Color: " + color}</p>
    </div>
  );
};

export default Card;
