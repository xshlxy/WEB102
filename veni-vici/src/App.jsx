import { useState } from 'react';
import './App.css';
import ItemDisplay from './Components/ItemDisplay';
import BanList from './Components/BanList';
import FetchButton from './Components/FetchButton';

function App() {
  const [item, setItem] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchRandomItem = async () => {
    const response = await fetch('https://api.harvardartmuseums.org/object?apikey=YOUR_API_KEY&size=1');
    const data = await response.json();

    const randomItem = data.records[0];
    if (filterBannedItems(randomItem)) {
      setItem(randomItem);
    } else {
      fetchRandomItem(); // Fetch another if the item is banned
    }
  };

  const addToBanList = (attribute) => {
    setBanList([...banList, attribute]);
  };

  const filterBannedItems = (item) => {
    // Filter based on banned artist names
    return !banList.includes(item.people[0]?.name);
  };

  return (
    <div className="whole-app">
      {/* Display the random item */}
      {item && <ItemDisplay item={item} addToBanList={addToBanList} />}

      {/* Button to fetch a new random item */}
      <FetchButton fetchRandomItem={fetchRandomItem} />

      {/* Display the list of banned items */}
      <BanList banList={banList} />
    </div>
  );
}

export default App;