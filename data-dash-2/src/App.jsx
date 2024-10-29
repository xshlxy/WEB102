import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
// Remove CategoryFilter and Router imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import Sidebar from './components/Sidebar';
import RecipeChart from './components/RecipeChart'; 

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const stats = [
    { title: 'Total Recipes', value: 100 },
    { title: 'My Favorite Recipe', value: 'Slow Cooked Beef Stew' },
    { title: 'Recipes Today', value: 10 },
  ];

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10`);
      const data = await response.json();
      setRecipes(data.results);
      setFilteredRecipes(data.results);
    };
    
    fetchRecipes();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterRecipes(term);
  };

  const filterRecipes = (term) => {
    const filtered = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <Router>
      
      <div className="dashboard">
        <Sidebar />
        

        <div className="layout">
          
          <div className="main-content">
            <div className="stats-section">
              {stats.map((stat, index) => (
                <Card key={index} title={stat.title} value={stat.value} />
              ))}
            </div>
            <RecipeChart recipes={filteredRecipes} />
            <SearchBar className="search" searchTerm={searchTerm} onSearch={handleSearch} />
            <Routes>
              <Route path="/" element={<Gallery recipes={filteredRecipes} />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
