import React, { useState, useEffect, useRef } from 'react';

function Media(props) {
  let attachment = props.media.type === "image" ? <img src={props.media.url}/> : <video src={props.media.url} autoPlay muted playsInline loop/>
  return (
    <div className="fullScreenMedia">
      {attachment}
    </div>
  );
}
export default Media;