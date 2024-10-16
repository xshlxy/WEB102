import React from 'react';

function ItemDisplay({ item, addToBanList }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <p onClick={() => addToBanList(item.people[0]?.name)}>Artist: {item.people[0]?.name}</p>
      <p>Medium: {item.medium}</p>
      {item.primaryimageurl && <img src={item.primaryimageurl} alt={item.title} />}
    </div>
  );
}

export default ItemDisplay;