import React, { useState, useEffect, useRef } from 'react';
import cv from '../readcv'; // Adjust the path based on where readcv.js is located

function Folder(props) {
  const [selectedIndex, setSelectedIndex] = useState();
  
  return (
    <>
      <div className="fileHeader">
        <div style={{ paddingLeft: 24 }}>Name</div>
        <div>Date</div>
      </div>
      <ul className="fileList">
        {props.collection && props.collection.items.map((item, index) => {
          return (
            <li
              className={selectedIndex === index ? "focused" : undefined}
              onDoubleClick={() => {
                if (props.windows.some(e => e.experience === item)) {
                  let index = props.windows.findIndex(e => e.experience === item);
                  props.focus(index);
                  return
                }
                props.open({
                  type: "experience",
                  name: item.heading,
                  experience: item
                })
              }}
              onMouseDown={() => setSelectedIndex(index)}
              key={item.heading}>
              <div className="name">
                <div className="fileIcon">
                  <img src={cv.media("document.png")} draggable={false}/>
                </div>
                <span>{item.heading}</span>
              </div>
              <div className="year">{item.year}</div>
            </li>
          )
        })}
      </ul>
    </>
  );
}
export default Folder;
