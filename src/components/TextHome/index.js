import React from "react";

import Typewriter from "typewriter-effect";
import TitleHome from "../TitleHome";

import "./index.scss";

const TextHome = () => {
  return (
    <div className="text-home-container">
      <p className="text-i-am">I am</p>
      <TitleHome text={"<Sebastian Martinez/>"} />
      <p className="subtitle">A Frontend developer</p>
    </div>
  );
};

export default TextHome;
