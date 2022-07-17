import React from "react";

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    gradientTransform="skewX(20) translate(-35, 0)"
    {...props}
  >
    <defs>
      <radialGradient id="gradientLinkedin">
        <stop offset="0%" stopColor="rgba(204, 168, 112, 1)" />
        <stop offset="35%" stopColor="rgba(236, 168, 62, 1)" />
        <stop offset="100%" stopColor="rgba(204, 168, 112, 1)" />
      </radialGradient>
    </defs>
    <path
      fill="url(#gradientLinkedin)"
      d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"
    />
  </svg>
);

export default Linkedin;
