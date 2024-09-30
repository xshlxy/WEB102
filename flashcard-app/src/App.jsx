import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const flashcards = [
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
      answer: 'Bonito (masculine)/Bonita (feminine)',
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="app">
      <h1>LinguaBrasil</h1>
      <p>Practice your portuguese with flashcards! Click on the card to see the answer.</p>
      <p>Difficulty: Easy (green), Medium (yellow), Hard (blue)</p>
      <p>Total Flashcards: {flashcards.length}</p>

      {/* Display the current flashcard */}
      <Card
        image={flashcards[currentIndex].image}
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        color={flashcards[currentIndex].color}
      />

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button onClick={handlePrevious}>&lt; Previous</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
};

export default App;
