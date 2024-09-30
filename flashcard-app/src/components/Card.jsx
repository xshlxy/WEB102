import React, { useState} from 'react';
import './Card.css'


const Card = ({ image, question, answer, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip} style={{ backgroundColor: isFlipped ? color : 'white' }}>
        <div className='front' >
            <img src={image} alt={question} className="card-image" />
            <h2 className='card-question'>{question}</h2>
        </div>
        <div 
        className={`back ${isFlipped ? 'flipped' : ''}`}
        style={{ backgroundColor: color }} >
            <h2 className='card-answer'>{answer}</h2>
        </div>
    </div>
  );
};

export default Card;