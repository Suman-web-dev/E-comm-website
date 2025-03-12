import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(Math.floor((targetDate - new Date()) / 1000));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="discount__countdown" id="countdown-time">
      <div className="countdown__item">
        <span>{days}</span>
        <p>Days</p>
      </div>
      <div className="countdown__item">
        <span>{hours}</span>
        <p>Hours</p>
      </div>
      <div className="countdown__item">
        <span>{minutes}</span>
        <p>Minutes</p>
      </div>
      <div className="countdown__item">
        <span>{secs}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
