import React, { useState, useEffect } from 'react';
import './App.css';
import ArtworkDisplay from './Components/ArtworkDisplay';
import BanList from './Components/BanList';
import RandomArtworkFetcher from './Components/RandomArtworkFetcher';
import History from './Components/History';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = 'https://api.harvardartmuseums.org/object';

function App() {

  const [artwork, setArtwork] = useState(null);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchRandomArtwork = async () => {
    setLoading(true);
    setError(null);
    try {
      const banQuery = banList.map(item => `-${item.type}:${encodeURIComponent(item.value)}`).join(' AND ');
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&size=1&sort=random&hasimage=1&q=${banQuery}`);
      const data = await response.json();
      if (data.records && data.records.length > 0) {
        const newArtwork = data.records[0];
        setArtwork(newArtwork);
        setHistory(prev => [newArtwork, ...prev].slice(0, 5));  // Keep last 5 items
      } else {
        setError('No artwork found matching the criteria. Try removing some ban list items.');
      }
    } catch (err) {
      setError('Error fetching artwork. Please try again.');
    }
    setLoading(false);
  };

  // Function to add an artist to the ban list
  const addToBanList = (type, value) => {
    if (value && !banList.some(item => item.type === type && item.value === value)) {
      setBanList(prevList => [...prevList, { type, value }]);
      fetchRandomArtwork();
    }
  };

  const removeFromBanList = (index) => {
    setBanList(prevList => prevList.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchRandomArtwork();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Harvard Art Museum Random Artwork</h1>
      
      {error && <p className="text-red-500">{error}</p>}

      <RandomArtworkFetcher fetchRandomArtwork={fetchRandomArtwork} loading={loading} />

      <ArtworkDisplay artwork={artwork} addToBanList={addToBanList} />

      <BanList banList={banList} onRemove={removeFromBanList} />

      <History history={history} />
    </div>
  );
}

export default App;