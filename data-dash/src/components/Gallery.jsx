import React from 'react';
import SuperheroCard from './SuperHeroCard';

const Gallery = ({ superheroes, currentPage, superheroesPerPage, setCurrentPage }) => {
  // Calculate the number of pages
  const pageCount = Math.ceil(superheroes.length / superheroesPerPage);

  // Calculate the start and end indices for slicing
  const startIndex = (currentPage - 1) * superheroesPerPage;  // Changed this line
  const endIndex = startIndex + superheroesPerPage;

  // Get the superheroes for the current page
  const currentSuperheroes = superheroes.slice(startIndex, endIndex);

  return (
    <div className="dashboard">
      {currentSuperheroes.map((hero) => (
        <SuperheroCard key={hero.id} superhero={hero} />
      ))}
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentPage(index + 1)}  // Changed this line
            disabled={index + 1 === currentPage}       // Changed this line
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;