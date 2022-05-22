import MovieItem from "../movieItem/MovieItem";
import { movies } from './constants';
import './moviesList.css';

const MoviesList = () =>{
return (
  <div className="movies-list">
    {movies.map(item =>(
      <MovieItem movie={item} key={item.id} />
    ))}
  </div>
)}
export default MoviesList;
