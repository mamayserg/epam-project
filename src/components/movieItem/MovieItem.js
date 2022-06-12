import MovieGenre from "./MovieGenre";
import MovieName from "./MovieName";
import MovieYear from "./MovieYear";
import MovieItemMenu from "./MovieItemMenu";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();
  let { id } = useParams();

  const openSelectedMovie = () => {
    if (String(id) !== String(movie.id)) {
      navigate(`/search/${movie.id}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="movie-item relative cursor-pointer"
      onClick={openSelectedMovie}
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
