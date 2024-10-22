import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery';
import Header from './components/Header';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const stats = [
    { title: 'Total Recipes', value: 100 },
    { title: 'Popular Recipe', value: 'Slow Cooked Beef Stew' },
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
    filterRecipes(term, selectedCategory); // Filter with both search term and category
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterRecipes(searchTerm, category); // Filter with both search term and category
  };

  const filterRecipes = (term, category) => {
    const filtered = recipes.filter(recipe => {
      const matchesSearchTerm = recipe.title.toLowerCase().includes(term.toLowerCase());
      const matchesCategory = category ? recipe.category.toLowerCase() === category.toLowerCase() : true; // Adjust category logic as per your data structure
      return matchesSearchTerm && matchesCategory;
    });
    setFilteredRecipes(filtered);
  };

  return (
      <div className="dashboard">
        <Header className="home"/> 

        <div className="stats-section">
          {stats.map((stat, index) => (
            <Card key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
        <SearchBar className="search" searchTerm={searchTerm} onSearch={handleSearch} />
        <Gallery className="recipes"
          recipes={filteredRecipes} 
        />
      </div>
  );
};

export default App;
