import React, { useState } from 'react';
import Window from './Window';
import Folder from './Folder';
import About from './About';
import Sticky from './Sticky';
import Media from './Media';
import Note from './Note';
import Player from './Player';
import cv from '../readcv';
import siteSettings from './SiteSettings'; // Add this import

// Rest of the code remains the same


function Desktop(props) {
  const [windows, setWindows] = useState([]);
  const [windowOrder, setWindowOrder] = useState([]);

  const handleFocus = (indexToMove) => {
    const windowToFocus = windows[indexToMove];
    setWindowOrder(prevOrder => [...(prevOrder.filter(x => x !== windowToFocus)), windowToFocus]);
  };

  const handleRemove = (indexToRemove) => {
    const windowToRemove = windows[indexToRemove];
    setWindows((prevArr) => prevArr.filter(x => x !== windowToRemove));
    setWindowOrder(prevOrder => prevOrder.filter(x => x !== windowToRemove));
  };

  const addWindow = (object) => {
    setWindows(prevItems => [...prevItems, object]);
    setWindowOrder(oldOrder => [...oldOrder, object]);
  }
  
  return (
    <div className="desktop">
      <div className="icons">
        <Icon
          icon={
            cv.general.profilePhoto ?
            <div className="profilePhoto">
              <img src={cv.general.profilePhoto} draggable={false}/>
            </div>
            :
            <img src={cv.media("contact.png")} draggable={false}/>
          }
          collection={{
            name: "About Me"
          }}
          open={() => {
            if (windows.some(e => e.id === cv.general.username)) { 
              let index = windows.findIndex(e => e.id === cv.general.username);
              handleFocus(index);
              return
            }
            addWindow({
              type: "about",
              name: "About Me",
              id: cv.general.username,
            });
          }}
        />
        {cv.allCollections.map((collection, index) => {
          if (collection.name === "Contact") { return }
          return (
            <Icon
              open={() => {
                if (windows.some(e => e.collection === collection)) { 
                  let index = windows.findIndex(e => e.collection === collection);
                  handleFocus(index);
                  return
                }
                addWindow({
                  type: "folder",
                  name: collection.name,
                  collection: collection
                });
              }}
              icon={<img src={cv.media("folder.png")} draggable={false}/>}
              collection={collection}
              key={collection.name}/>
          )
        })}
        {cv.general.status && cv.general.status.text ?
          <Icon
            open={() => {
              if (windows.some(e => e.status === cv.general.status)) {
                let index = windows.findIndex(e => e.status === cv.general.status);
                handleFocus(index);
                return
              }
              addWindow({
                type: "status",
                name: "Status",
                status: cv.general.status
              });
            }}
            icon={<div className="statusIcon">{cv.general.status.emoji}</div>}
            collection={{
              type: "status",
              name: "Status",
              status: cv.general.status,
            }}
          />
        : null}  
        {siteSettings.soundtrack ?
          <Icon
            open={() => {
              if (windows.some(e => e.track === siteSettings.soundtrack)) {
                let index = windows.findIndex(e => e.track === siteSettings.soundtrack);
                handleFocus(index);
                return 
              }
              addWindow({
                type: "soundtrack",
                name: "Soundtrack",
                track: siteSettings.soundtrack,
              });
            }}
            icon={<img src={cv.media("listen.png")} draggable={false}/>}
            collection={{
              name: "Listen"
            }}
          />
        : null}
      </div>
      {windows.length > 0 ?
        <div className="windows">
          {windows.map((item, index) => {
            let maxWidth = window.innerWidth - 12;
            let content;
            let size;
            let key;
            if (item.type === "folder") {
              content = <Folder collection={item.collection} open={addWindow} focus={handleFocus} windows={windows}/>;
              size = { width: Math.min(480, maxWidth), height: 360 }
            } else if (item.type === "experience") {
              content = <Note experience={item.experience} open={addWindow} windows={windows}/>;
              size = { width: Math.min(684, maxWidth), height: 540 }
              key = item.experience.id;
            } else if (item.type === "status") {
              content = <Sticky status={item.status}/>
              size ={ width: Math.min(320, maxWidth), height: 280 }
            } else if (item.type === "media") {
              content = <Media media={item.attachment}/>;
              size = {
                width: Math.min(684, maxWidth),
                height: (Math.min(684, maxWidth) * (item.attachment.height / item.attachment.width)) + 44,
              }
              key = item.attachment.url
            } else if (item.type === "about") {
              content = <About/>
              size = { width: Math.min(480, maxWidth), height: 360 }
            } else if (item.type === "soundtrack") {
              content = <Player close={() => handleRemove(index)}/>
              size = { width: 220, height: 220 }
            }
            return (
              <Window
                key={key ? key : item.name}
                width={size.width}
                height={size.height}
                focus={() => handleFocus(index)}
                close={() => handleRemove(index)}
                title={item.name}
                type={item.type}
                zIndex={windowOrder.indexOf(item)}
                index={index}>
                {content}
              </Window>
            )
          })}
        </div>
      : null}
    </div>
  );
}

function Icon(props) {
  return (
    <div
      onDoubleClick={props.open}
      tabIndex={0}
      className="desktopItem">
      <div className="icon">
        {props.icon ? props.icon : null}
      </div>
      <div className="label">
        {props.collection.name}
      </div>
    </div>
  )
}
export default Desktop;
