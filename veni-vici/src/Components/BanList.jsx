import React from 'react';

const BanList = ({ banList, onRemove }) => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Ban List</h3>
            {banList.length === 0 ? (
            <p>No items in the ban list.</p>
            ) : (
            <ul className="list-disc pl-5">
                {banList.map((item, index) => (
                <li key={index} className="mb-1">
                    {item.type}: {item.value}
                    <button
                        onClick={() => onRemove(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                    >
                        Remove
                    </button>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
  };

export default BanList;