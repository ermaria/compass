import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { hasPearlHacksStarted } from '../hasPearlHacksStarted';

const CountdownTimer = () => {
  // Define both start and end times
  const startTime = new Date('2024-02-24T11:00:00-05:00');
  const endTime = new Date('2024-02-25T11:00:00-05:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    let difference = startTime - now > 0 ? startTime - now : endTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const displayTimeLeft = () => {
    const now = new Date();
    let eventStatus = now < startTime ? "UNTIL HACKING BEGINS" : "UNTIL HACKING ENDS";
    const { days, hours, minutes, seconds } = timeLeft;
    if (Object.keys(timeLeft).length !== 0) {
      return `${days || '00'} D : ${hours || '00'} H : ${minutes || '00'} M : ${seconds || '00'} S`;
    }
    return now < endTime ? "Hacking is ongoing!" : "Hacking has ended";
  };

  return displayTimeLeft();
};

export const CountdownLive = () => {
  return (
    <>
      <Typography variant="h3" sx={{ color: "rgb(24, 118, 189)", textAlign: 'center', paddingTop: '30px' }}>
        {CountdownTimer()}
      </Typography>
    </>
  )

}


export default CountdownTimer;
