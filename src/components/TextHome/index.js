import React from "react";

import Typewriter from "typewriter-effect";

import "./index.css";

const TextHome = () => {
  return (
    <div className="text-home-container">
      <p className="text-i-am">I AM</p>
      <h1 className="text-home-title">{"<Sebastian Martinez />"}</h1>
      <Typewriter
        options={{
          loop: true,
          skipAddStyles: true,
          wrapperClassName: "text-home-subtitle",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("A Frontend Developer")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default TextHome;
