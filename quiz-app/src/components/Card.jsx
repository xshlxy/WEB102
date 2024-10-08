import React from 'react';
import './Card.css'; // Assuming you have styles for the card

const Card = ({ image, question, answer, color, isCorrect, isFlipped }) => {
    return (
      <div className="card" style={{ backgroundColor: color }}>
        {!isFlipped ? (
          <div className="card-front">
            <img src={image} alt="Flashcard visual" className="card-image" />
            <p className="card-question">{question}</p>
          </div>
        ) : (
          <div className="card-back">
            <p className="card-answer">{answer}</p>
            {isCorrect === true && <p className="correct-mark">✔️ Correct!</p>}
            {isCorrect === false && <p className="incorrect-mark">❌ Incorrect</p>}
          </div>
        )}
      </div>
    );
  };
  
  export default Card;