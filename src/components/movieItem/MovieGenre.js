import { getGenreNames } from "../../helpers/genreMapper";

const MovieGenre = ({ genre = [] }) =>{
  
  return(
  <div className="text-white opacity-50 font-mono text-sm">{getGenreNames(genre)}</div>
);}

export default MovieGenre;
