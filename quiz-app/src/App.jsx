import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';
import FuzzySet from 'fuzzyset.js';


const App = () => {
  const initialFlashcards = [
    {
      image: 'https://media.tenor.com/yDAeNtrzDp4AAAAM/bye-teletubbies.gif',
      question: 'What is "Goodbye" in Portuguese?',
      answer: 'Tchau',
      difficulty: 'easy',
      color: '#98FB98',
    },
    {
      image: 'https://i.pinimg.com/originals/9c/9a/25/9c9a2505357d19f80927550a8df1783f.gif',
      question: 'What is "One" in Portuguese?',
      answer: 'Um',
      difficulty: 'easy',
      color: '#98FB98',
    },
    {
      image: 'https://media4.giphy.com/media/vvbGMpbhZMcHSsD50w/source.gif',
      question: 'How do you say "Yes" in Portuguese?',
      answer: 'Sim',
      difficulty: 'easy',
      color: '#98FB98',
    },
    {
      image: 'https://media4.giphy.com/media/26BRv0ThflsHCqDrG/200w.gif?cid=6c09b952znhuflnz7zrmm688yif32odxdxto38wqxv4cs8so&ep=v1_gifs_search&rid=200w.gif&ct=g',
      question: 'What is "Red" in Portuguese?',
      answer: 'Vermelho',
      difficulty: 'easy',
      color: '#98FB98',
    },
    {
      image: 'https://media.tenor.com/fTTVgygGDh8AAAAM/kitty-cat-sandwich.gif',
      question: 'What is "Cat" in Portuguese?',
      answer: 'Gato',
      difficulty: 'easy',
      color: '#98FB98',
    },
    {
      image: 'https://i.pinimg.com/originals/e8/f3/8e/e8f38e2b7a8d3a395e95b77c324fe6e5.gif',
      question: 'What is "To drink" in Portuguese?',
      answer: 'Beber',
      difficulty: 'medium',
      color: '#f4f298',
    },
    {
      image: 'https://media.tenor.com/h51xVM8s3QcAAAAM/dancing-cat-dance.gif',
      question: 'What is "Friday" in Portuguese?',
      answer: 'Sexta-feira',
      difficulty: 'medium',
      color: '#f4f298',
    },
    {
      image: 'https://media0.giphy.com/media/PkWtM2kZ0B76VV2g0W/giphy.gif?cid=6c09b952scnm37u2e74bws341aompimjq9ldi7sfo827bow7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      question: 'What is "Brother" in Portuguese?',
      answer: 'Irmão',
      difficulty: 'medium',
      color: '#f4f298',
    },
    {
      image: 'https://media.tenor.com/r5gE4j3C37MAAAAM/chicken-cluck.gif',
      question: 'What is "Chicken" in Portuguese?',
      answer: 'Frango',
      difficulty: 'medium',
      color: '#f4f298',
    }, 
    {
      image: 'https://media1.tenor.com/m/YsiFCgTSTu8AAAAC/beautiful-so-beautiful.gif',
      question: 'What is "Beautiful" in Portuguese?',
      answer: 'Bonito/Bonita',
      difficulty: 'medium',
      color: '#f4f298',
    },
    {
      image: 'https://i.gifer.com/7pmA.gif',
      question: 'What is "To understand" in Portuguese?',
      answer: 'Entender',
      difficulty: 'hard',
      color: '#ADD8E6',
    },
    {
      image: 'https://media.tenor.com/MEh3qp8xZ5cAAAAM/wink-makes-sense.gif',
      question: 'What does "Faz sentido?" mean in English?',
      answer: 'Does it make sense?',
      difficulty: 'hard',
      color: '#ADD8E6',
    },
    {
      image: 'https://i.imgur.com/zmlgywO.gif',
      question: 'What is "Responsibility" in Portuguese?',
      answer: 'Responsabilidade',
      difficulty: 'hard',
      color: '#ADD8E6',
    },
    {
      image: 'https://media.tenor.com/GpiHmj_rSR8AAAAM/omg-ohmygod.gif',
      question: 'What does "Cair a ficha" mean in English?',
      answer: 'To realize/understand something',
      difficulty: 'hard',
      color: '#ADD8E6',
    },
    {
      image: 'https://media0.giphy.com/media/3ornkbkxVlmwtrpB0A/giphy.gif?cid=6c09b9529pbf1zgezbc2d8gt1fbic8by9o5q41e5rt1436kj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      question: 'What is "Carnival" in Portuguese?',
      answer: 'Carnaval',
      difficulty: 'hard',
      color: '#ADD8E6',
    },
  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const [masteredFlashcards, setMasteredFlashcards] = useState([]);

  const correctAnswer = FuzzySet([flashcards[currentIndex].answer.toLowerCase()]);

  // Shuffle Function
  const shuffleFlashcards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    resetState();
  }
  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
    resetState();
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    resetState();
  };

  //Handle answers
  const handleSubmit = () => {
    const userAnswerLower = userAnswer.toLowerCase().trim();
    const match = correctAnswer.get(userAnswerLower);
    const isAnswerCorrect = match && match[0][0] > 0.7;

    if (isAnswerCorrect) {
      setIsCorrect(true);
      setCurrentStreak((prevStreak) => {
        const newStreak = prevStreak + 1;
        if (newStreak > bestStreak) {
          setBestStreak(newStreak);
        }
        return newStreak;
      })
    } else {
      setIsCorrect(false);
      setCurrentStreak(0);
    }

    setIsFlipped(true);
  }

  //reset user input
  const resetState = () => {
    setUserAnswer('');
    setIsCorrect(null);
    setIsFlipped(false);
  }

  const handleMastered = () => {
    const masteredCard = flashcards[currentIndex];
    setMasteredFlashcards((prevMastered) => [...prevMastered, masteredCard]);

    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((_, index) => index !== currentIndex)
    );

    setCurrentIndex((prevIndex) =>
      prevIndex >= flashcards.length - 1 ? 0 : prevIndex
    );

    resetState();
  };

  return (
    <div className="app">
      <h1>LinguaBrasil</h1>
      <p>Practice your Portuguese with flashcards! Click on the card to see the answer.</p>
      <p>Difficulty: Easy (green), Medium (yellow), Hard (blue)</p>
      <p>Total Flashcards: {flashcards.length}</p>

      <div className="streaks">
        <p>Current Streak: {currentStreak}</p>
        <p>Best Streak: {bestStreak}</p>
      </div>

      {flashcards.length > 0 ? (
        <Card
          image={flashcards[currentIndex].image}
          question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex].answer}
          color={flashcards[currentIndex].color}
          isCorrect={isCorrect}
          isFlipped={isFlipped}
        />
      ) : (
        <p>All cards mastered!</p>
      )}

      <input
        type="text"
        placeholder="Type your answer here"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        disabled={isFlipped}
      />
      <div className="buttons">
        <button onClick={handleSubmit} disabled={isFlipped || !userAnswer.trim()}>
            Submit
          </button>

          {isCorrect === true && (
            <button onClick={handleMastered}>
              Mark as Mastered
            </button>
          )}

        <div className="navigation">
          
          <button onClick={handlePrevious}>←</button>
          <button onClick={shuffleFlashcards}>Shuffle</button>
          <button onClick={handleNext}>→</button>
        </div>
      </div>
      

      {masteredFlashcards.length > 0 && (
        <div className="mastered-flashcards">
          <h2>Mastered Flashcards:</h2>
          <ul>
            {masteredFlashcards.map((card, index) => (
              <li key={index} style={{ backgroundColor: card.color }}>
                {card.question}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;