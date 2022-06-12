import MovieGenre from "./MovieGenre";
import MovieName from "./MovieName";
import MovieYear from "./MovieYear";
import MovieItemMenu from "./MovieItemMenu";

const MovieItem = ({ movie, onClickComponent}) => {
  const onClick = () => onClickComponent(movie);

  return (
    <div
      className="movie-item relative cursor-pointer"
      onClick={onClick}
    >
      <MovieItemMenu movie={movie} />
      <img src={require(`../../images/film.jpg`)} alt="film" />
      <div className="flex flex-row align-top justify-between mt-3">
        <div className="flex flex-col">
          <MovieName name={movie.title} />
          <MovieGenre genre={movie.genre} />
        </div>
        <div>
          <MovieYear date={movie.release_date} />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
