import { getYearFromDate } from "../../helpers/getYear.helper";
import React from 'react';

const MovieYear = ({ date}: {date: string}) => (
  <span className="text-white opacity-50 font-mono text-sm p-1 border-2 rounded-md">
    { getYearFromDate(date)}
  </span>
);

export default MovieYear;
