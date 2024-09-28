import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import cv from '../readcv';

function Window(props) {
  const controls = useDragControls()
  const windowRef = useRef(null);
  const scrollRef = useRef(null);
  const x = useMotionValue(24 + (props.index * 24));
  const y = useMotionValue(24 + (props.index * 24));
  const width = useMotionValue(props.width);
  const height = useMotionValue(props.height);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!windowRef.current) { return }
    windowRef.current.focus();
  }, []);

  useEffect(() => {
    if (!scrollRef.current || props.type === "soundtrack") { return }
    let maxHeight = window.innerHeight - (28 + 24 + 96);
    let newHeight = Math.min(props.width * 1.334, (scrollRef.current.scrollHeight + 53));
    height.set(Math.min(newHeight, maxHeight));
    if (x.get() + props.width > window.innerWidth) {
      x.set((window.innerWidth - props.width) / 2);
    }
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    const handleScroll = (event) => {
      if (element.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (element) {
      element.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  function startDrag(event) {
    controls.start(event)
  }

  function updateX(v, i, m, orig) {
    v.set(v.get() + m * i.delta.x);
  }

  function updateY(v, i, m) {
    v.set(v.get() + m * i.delta.y);
  }

  function updateValues(savedSize, minSize, size, m1, savedPos, pos, m2, offset) {
    const newSize = Math.round(savedSize + m1 * offset);
    if (newSize >= minSize) {
      size.set(newSize);
      pos.set(Math.round(savedPos + m2 * offset));
    }
  }

  const saved = useRef(undefined);
  function saveValues() {
    if (saved.current !== undefined) {
      return;
    }
    saved.current = {
      x: x.get(),
      y: y.get(),
      width: width.get(),
      height: height.get(),
    };
  }
  function clearValues() {
    saved.current = undefined;
  }

  const startX = useRef(undefined);
  const startY = useRef(undefined);
  const startWidth = useRef(0);
  function onPanStart(event, info) {
    document.body.style.userSelect = "none";
  }

  function onPanEnd() {
    document.body.style.userSelect = undefined
    clearValues();
  }
  
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragListener={props.type !== "soundtrack" ? false : undefined}
      dragConstraints={{
        top: -6,
      }}
      dragElastic={0}
      tabIndex={0}
      preventScroll={true}
      ref={windowRef}
      onFocus={() => props.focus()}
      style={{
        zIndex: props.zIndex,
        x,
        y,
        width,
        height,
      }}
      dragControls={controls}
      onDrag={(event, info) => {
        x.set(Math.round(x.get()));
        y.set(Math.round(y.get()));
        width.set(Math.round(width.get()));
        height.set(Math.round(height.get()));
      }}
      className="windowWrap"
    >
      {props.type !== "soundtrack" ?
      <>
      <motion.div className="dragHandle n" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.height, 180, height, -1, saved.current.y, y, 1, info.offset.y);
      }}/>
      <motion.div className="dragHandle s" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.height, 180, height, 1, saved.current.y, y, 0, info.offset.y);
      }}/>
      <motion.div className="dragHandle e" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.width, 220, width, 1, saved.current.x, x, 0, info.offset.x);
      }}/>
      <motion.div className="dragHandle w" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.width, 220, width, -1, saved.current.x, x, 1, info.offset.x);
      }}/>
      <motion.div className="dragHandle ne" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.height, 180, height, -1, saved.current.y, y, 1, info.offset.y);
        updateValues(saved.current.width, 220, width, 1, saved.current.x, x, 0, info.offset.x);
      }}/>
      <motion.div className="dragHandle nw" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.height, 180, height, -1, saved.current.y, y, 1, info.offset.y);
        updateValues(saved.current.width, 220, width, -1, saved.current.x, x, 1, info.offset.x);
      }}/>
      <motion.div className="dragHandle se" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.height, 180, height, 1, saved.current.y, y, 0, info.offset.y);
        updateValues(saved.current.width, 220, width, 1, saved.current.x, x, 0, info.offset.x);
      }}/>
      <motion.div className="dragHandle sw" onPanStart={onPanStart} onPanEnd={onPanEnd} onPan={(event, info) => {
        saveValues();
        updateValues(saved.current.height, 180, height, 1, saved.current.y, y, 0, info.offset.y);
        updateValues(saved.current.width, 220, width, -1, saved.current.x, x, 1, info.offset.x);
      }}/>
      </> : null}
      
      <div
        className="window"
        data-scrolled={isScrolled}
        data-type={props.type}>
        <div
          className="windowHeader"
          style={{ touchAction: "none" }}
          onPointerDown={startDrag}
        >
          <div className="trafficLights">
            <button onClick={props.close}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
              >
                <path
                  fill="#4D0000"
                  d="M3.172 8.121a.5.5 0 1 0 .707.707L6 6.707l2.122 2.121a.5.5 0 0 0 .707-.707L6.707 6 8.83 3.878a.5.5 0 0 0-.707-.707L6 5.293 3.88 3.17a.5.5 0 1 0-.707.708l2.121 2.12z"
                  style={{
                    fill: "#4d0000",
                  }}
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
              >
                <path
                  fill="#995700"
                  d="M2 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 2 6"
                  style={{
                    fill: "#995700",
                  }}
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
              >
                <path
                  fill="#006500"
                  d="M7.5 9 3 4.5v4a.5.5 0 0 0 .5.5zM4.5 3h4a.5.5 0 0 1 .5.5v4z"
                  style={{
                    fill: "#006500",
                  }}
                />
              </svg>
            </button>
          </div>
          <div className="title">{props.title}</div>
        </div>
        <div
          ref={scrollRef}
          className="windowContent">
          {props.children}
        </div>
      </div>
    </motion.div>
  );
}
export default Window;
