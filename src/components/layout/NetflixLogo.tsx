import React from 'react';

const NetflixLogo = ({ opacity = 1 }:  {opacity?: number }) => (
  <div
    style={{ opacity: `${opacity}` }}
    className="text-red-100 text-lg hover:opacity-80 cursor-pointer "
  >
    <span className="font-black">Netflix</span>
    <span>roulete</span>
  </div>
);

export default NetflixLogo;