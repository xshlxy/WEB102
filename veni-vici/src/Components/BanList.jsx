import React from 'react';

function BanList({ banList }) {
  return (
    <div>
      <h3>Ban List:</h3>
      <ul>
        {banList.map((attribute, index) => (
          <li key={index}>{attribute}</li>
        ))}
      </ul>
    </div>
  );
}

export default BanList;