import React, { useState, useEffect, useRef } from 'react';
import siteSettings from './SiteSettings';
import cv from '../readcv';
// import './Player.css'; // Ensure CSS is imported

function Player(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const { currentTime, duration } = audioRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('timeupdate', updateProgress);

    return () => {
      audioElement.removeEventListener('timeupdate', updateProgress);
    };
  }, []);
  
  return (
    <div
      className="soundtrack"
      data-theme={siteSettings.soundtrack.playerColor}
      data-paused={!isPlaying}>
      <div className="controls">
        <PlayerButton className="closeSoundtrack" onClick={props.close}>
          <Close12/>
        </PlayerButton>
        <PlayerButton
          className="playToggle"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause12/> : <Play12/>}
          <div className="progress">
            <Progress24 percentage={progress}/>
          </div>
        </PlayerButton>
      </div>
      <img src={siteSettings.soundtrack.artwork} draggable={false}/>
      <audio
  ref={audioRef}
  autoPlay
  src={siteSettings.soundtrack.track}
></audio>

    </div>
  );
}

function PlayerButton(props) {
  return (
    <button
      className={`playerButton ${props.className ? props.className : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}


function Pause12(props) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"
        fill={siteSettings.soundtrack.playerColor === "light" ? "#fff" : "#000"}
      />
    </svg>
  );
}

function Play12(props) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.748 1.068a.5.5 0 01.497-.004l8 4.5a.5.5 0 010 .872l-8 4.5A.5.5 0 012.5 10.5v-9a.5.5 0 01.248-.432z"
        fill={siteSettings.soundtrack.playerColor === "light" ? "#fff" : "#000"}
      />
    </svg>
  );
}

function Close12(props) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.793 1.793c.214-.215.547-.231.742-.036l.707.707c.195.196.18.528-.035.743L7.414 6l2.793 2.793c.214.215.23.547.035.743l-.707.707c-.195.195-.528.18-.742-.036L5.999 7.414l-2.792 2.793c-.215.215-.548.23-.743.036l-.707-.708c-.195-.195-.18-.527.035-.742L4.585 6 1.792 3.207c-.215-.215-.23-.547-.035-.742l.707-.708c.195-.195.528-.179.742.036L6 4.586z"
        fill={siteSettings.soundtrack.playerColor === "light" ? "#fff" : "#000"}
      />
    </svg>
  );
}

function Progress24(props) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      // Initially set the stroke-dasharray and stroke-dashoffset
      pathRef.current.style.strokeDasharray = `${(props.percentage / 100) * length} ${length}`;
      pathRef.current.style.strokeDashoffset = 0;
    }
  }, [props.percentage]);
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <circle
        ref={pathRef}
        cx={12}
        cy={12}
        r={11.5}
        stroke="#fff"
        style={{
          stroke: siteSettings.soundtrack.playerColor === "light" ? "#fff" : "#000",
          strokeOpacity: 1,
        }}
      />
    </svg>
  )
}


export default Player;
