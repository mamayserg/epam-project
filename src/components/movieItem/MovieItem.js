import MovieGenre from "./MovieGenre";
import MovieName from "./MovieName";
import MovieYear from "./MovieYear";

const MovieItem = ({ movie }) => (
  <div className="movie-item">
    <img src={require(`../../images/film.jpg`)} alt="film"/>
  <div className="flex flex-row align-top justify-between mt-3">
    <div className="flex flex-col">
      <MovieName name={movie.name} />
      <MovieGenre genre={movie.genre}/>
    </div>
    <div>
      <MovieYear year={movie.year} />
    </div>
  </div>
  </div>
);

export default MovieItem;
