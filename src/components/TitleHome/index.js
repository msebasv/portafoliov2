import React, { useState, useRef } from "react";

import "./index.scss";

const TitleHome = (props) => {
  const refs = useRef();
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const onMoveMouse = (event) => {
    const width = refs.current.clientWidth;
    const height = refs.current.clientHeight;
    const oX = (event.nativeEvent.offsetX / width) * 100;
    const oY = (event.nativeEvent.offsetY / height) * 100;
    setPosition({
      x: oX,
      y: oY,
    });
  };

  const { x, y } = position;

  const makeStyle = {
    "--maskX": x,
    "--maskY": y,
  };

  return (
    <div
      className="titleContainer"
      onMouseMove={onMoveMouse}
      ref={refs}
      style={makeStyle}
    >
      <div className="titleWrapper">
        <h1>{props.text}</h1>
      </div>
      <div className="titleWrapper cloneWrapper">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};

export default TitleHome;
