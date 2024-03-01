// src/components/Controls.js
import React from 'react';
import './Stopwatch.css';

const Controls = ({ isRunning, onStartPause, onReset, onLap }) => {
  return (
    <div className="controls-container">
      <button className="button" onClick={onStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
      <button className="button" onClick={onReset}>Reset</button>
      <button className="button" onClick={onLap}>Lap</button>
    </div>
  );
};

export default Controls;
