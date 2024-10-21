import React from 'react';
import SuperheroCard from './SuperHeroCard';

const Gallery = ({ superheroes, currentPage, superheroesPerPage, setCurrentPage }) => {
  // Calculate the number of pages
  const pageCount = Math.ceil(superheroes.length / superheroesPerPage);

  // Get the superheroes for the current page
  const currentSuperheroes = superheroes.slice(currentPage * superheroesPerPage, (currentPage + 1) * superheroesPerPage);

  return (
    <div className="dashboard">
      {currentSuperheroes.map((hero) => (
        <SuperheroCard key={hero.id} superhero={hero} />
      ))}
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index)} disabled={index === currentPage}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;