import React, { useState, useEffect } from 'react';
import './countdown.css';

const CountdownTarget = new Date("2024-01-01T23:59:59");

const formatTimeUnit = (unit) => {
  return unit.toString().padStart(2, '0');
};

const getTimeLeft = () => {
  const totalTimeLeft = CountdownTarget - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60);
  const seconds = Math.floor(totalTimeLeft / 1000 % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = ({currentPage}) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`countdown ${currentPage}`}>
      <h2>Launch Day Countdown</h2>
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = formatTimeUnit(el[1]);
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className='label'> {label} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
