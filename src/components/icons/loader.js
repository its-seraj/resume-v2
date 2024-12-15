import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="
          M 50,5
          A 45,45 0 1,1 50,95
          A 45,45 0 1,1 50,5
        "
      />
    </g>
  </svg>
);

export default IconLoader;
