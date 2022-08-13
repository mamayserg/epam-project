import { getGenreNames } from "../../helpers/genreMapper";
import React from 'react';

type MovieGenreprops ={ genre?: Array<string> }

const MovieGenre = ({ genre = [] }: MovieGenreprops) =>{

  return(
  <div className="text-white opacity-50 font-mono text-sm">{ getGenreNames(genre)}</div>
);}

export default MovieGenre;
