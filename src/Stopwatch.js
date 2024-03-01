// src/components/Stopwatch.js
import React, { useState, useEffect } from 'react';
import TimerDisplay from './TimeDisplay';
import Controls from './Controls';
import LapDisplay from './LapDisplay';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [lapTimes, setLapTimes] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      setStartTime(Date.now() - time * 1000);
      interval = setInterval(() => {
        setTime((Date.now() - startTime) / 1000);
      }, 10); // update every 10 milliseconds for smoother display
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setStartTime(0);
    setLapTimes([]);
  };

  const handleLap = () => {
    setLapTimes([...lapTimes, formatTime(time)]);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const milliseconds = Math.floor((timeInSeconds % 1) * 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="gradient-circle"></div>
      <TimerDisplay time={time} />
      <Controls isRunning={isRunning} onStartPause={handleStartPause} onReset={handleReset} onLap={handleLap} />
      <LapDisplay lapTimes={lapTimes} />
    </div>
  );
};

export default Stopwatch;
