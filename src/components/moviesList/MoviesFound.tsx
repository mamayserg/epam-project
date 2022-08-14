import React from "react";

const MoviesFound = ({ count = 0 }: {count?: number}) => (
  <div className="text-white font-light py-4">
    <span className=" font-medium">{count}</span> Movies found
  </div>
);
export default MoviesFound;
