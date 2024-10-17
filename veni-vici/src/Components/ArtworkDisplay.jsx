import React from 'react';

function ArtworkDisplay({ artwork, addToBanList }) {
    if (!artwork) return null;

    const renderAttribute = (label, value, type) => (
      <p className="mb-2">
        <span className="font-bold">{label}: </span>
        <button onClick={() => addToBanList(type, value)} className="text-blue-500 hover:underline">
          {value || 'Unknown'}
        </button>
      </p>
    );

    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-2">{artwork.title}</h2>
        <img src={artwork.primaryimageurl} alt={artwork.title} className="mb-4 max-w-full h-auto" />
        {renderAttribute('Artist', artwork.people?.[0]?.name, 'artist')}
        {renderAttribute('Medium', artwork.medium, 'medium')}
        {renderAttribute('Classification', artwork.classification, 'classification')}
      </div>
    );
}

export default ArtworkDisplay;