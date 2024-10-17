import React from 'react';

const RandomArtworkFetcher = ({ fetchRandomArtwork, loading }) => {
  return (
    <button
      onClick={fetchRandomArtwork}
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
    >
      {loading ? 'Loading...' : 'Get Random Artwork'}
    </button>
  );
};
export default RandomArtworkFetcher;