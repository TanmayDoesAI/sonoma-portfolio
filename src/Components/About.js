import React, { useState, useEffect, useRef } from 'react';
import RichText from './RichText'; // You'll create this component
import cv from '../readcv';

function About(props) {
  return (
    <div className="about">
      <div className="aboutContent">
        <div className="aboutHeader">
          <div className="pfp">
            <img src={cv.general.profilePhoto}/>
          </div>
          <div>
            <h2>{cv.general.displayName}</h2>
            {cv.general.byline ? <p>{cv.general.byline}</p> : null}
          </div>
        </div>
        {(cv.contact && cv.contact.length > 0) || cv.general.about ?
          <div className="contactItems">
            {cv.contact && cv.contact.length > 0 ?
              <>
                {cv.contact.map((contactItem, index) => {
                  return (
                    <>
                      <div key={contactItem.id} className="contactLabel">{contactItem.platform}</div>
                      <div className="contactItem">
                        <a href={contactItem.url} target="_blank">{contactItem.handle}</a>
                      </div>
                      {(index !== cv.contact.length - 1) ?
                        <hr/>
                      : null}
                    </>
                  )
                })}
              </>
          : null}
          {cv.general.about ?
            <>
              <hr/>
              <div className="contactLabel">About</div>
              <div className="contactItem">
                <RichText text={cv.general.about}/>
              </div>
            </>
          : null}
          </div>
        : null}
      </div>
    </div>
  );
}
export default About;
