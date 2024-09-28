import React, { useState, useEffect, useRef } from 'react';

function Sticky(props) {
  let date = new Date(props.status.timestamp);
  let day = date.toLocaleString('en-En',{
      weekday: "short",
    });
    let month = date.toLocaleString('en-En',{
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  return (
    <div className="sticky">
      <RichText text={props.status.text}/>
      <p>&ndash; {day} {month}</p>
    </div>
  );
}
export default Sticky;
