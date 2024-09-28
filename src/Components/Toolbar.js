import React, { useState, useEffect } from 'react';
import cv from '../readcv'; // Add this import
import siteSettings from './SiteSettings'; // Add this import

// Rest of the code remains the same


function Toolbar(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    let day = date.toLocaleString('en-US', {
      weekday: "short",
    });
    let month = date.toLocaleString('en-US', {
      month: "short",
      day: "numeric",
    });
    let timeStr = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
    return (
      <div style={{ display: 'flex' }}>
        <span>{day}&nbsp;{month}</span>
        <div style={{ width: '0.5em' }}/>
        <span>{timeStr}</span>
      </div>
    );
  };  
  
  return (
    <div className="toolbar" data-theme={siteSettings.toolbarColor}>
      <h1>{cv.general.displayName}</h1>
      <div style={{ marginLeft: 'auto' }}>
        <div>{formatTime(time)}</div>
      </div>
    </div>
  );
}
export default Toolbar;
