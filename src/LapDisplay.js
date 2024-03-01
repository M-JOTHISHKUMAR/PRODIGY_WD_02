// src/components/LapDisplay.js
import React from 'react';

const LapDisplay = ({ lapTimes }) => {
  return (
    <div className="lap-display">
      <h3>Lap Times</h3>
      <ul>
        {lapTimes.map((lap, index) => (
          <li key={index}>{`Lap ${index + 1}: ${lap}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default LapDisplay;
