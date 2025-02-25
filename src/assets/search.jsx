import React from "react";

const Search = ({ width = "12", height = "12", color = "#F2F2F2" }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" text-black/4"
      >
        <path
          d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 11L9 9"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Search;
