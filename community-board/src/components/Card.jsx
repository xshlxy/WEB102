import React from 'react';
import './Card.css'


const Card = ({ image, title, date, time, location, instagramLink }) => {
  return (
    <div className="card">
        <img src={image} alt={title} className="event-image" />
        <div className='event-details' >
            <h2 className='event-title'>{title}</h2>
            <p className='event-date-time'>{date} • {time}</p>
            <p className='event-location'>{location}</p>
            <a href={instagramLink} target='_blank' className='event-link'>Find More</a>
        </div>
    </div>
  );
};

export default Card;