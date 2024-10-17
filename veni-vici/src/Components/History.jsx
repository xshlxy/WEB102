import React from "react";

const History = ({ history }) => {
    return (
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Viewing History</h3>
        {history.length === 0 ? (
          <p>No items in history.</p>
        ) : (
          <ul className="list-disc pl-5">
            {history.map((item, index) => (
              <li key={index} className="mb-1">{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default History;