import React from 'react';

function FetchButton({ fetchRandomItem }) {
  return (
    <button onClick={fetchRandomItem}>Get Random Item</button>
  );
}

export default FetchButton;