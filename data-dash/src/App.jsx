import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const superheroesPerPage = 10;
  
  useEffect(() => {
    const fetchSuperheroes = async () => {
      const publicKey = import.meta.env.MARVEL_PUBLIC_API_KEY
      const response = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`);
      const json = await response.json()
      setSuperheroes(json)
    };

    fetchSuperheroes();
  }, []);

  return (
    <div className="dashboard">
      <Gallery 
        superheroes={superheroes} 
        currentPage={currentPage} 
        superheroesPerPage={superheroesPerPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default App;
