import React from 'react';

const MovieName = ({ name = "" }: {name?: string}) => (
  <div className="text-white text-lg font-mono mb-2">{name}</div>
);

export default MovieName;
