// src/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <span>{time}</span>
    </div>
  );
};

export default Clock;
