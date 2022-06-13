import MovieGenre from "./MovieGenre";
import MovieName from "./MovieName";
import MovieYear from "./MovieYear";
import MovieItemMenu from "./MovieItemMenu";
import Skeleton from "@mui/material/Skeleton";

const MovieItem = ({ movie, onClickComponent, isLoading}) => {
  const onClick = () => onClickComponent(movie);

  return (<>{isLoading ? (<div className="mb-10">
    <Skeleton variant="rectangular"  height={310} />
    <Skeleton animation="wave" height={10} style={{ marginBottom: 15, marginTop: 15 }} />
    <Skeleton animation="wave" height={10} width="80%" />
  </div>):
(<div
  className="movie-item relative cursor-pointer"
  onClick={onClick}
>
  <MovieItemMenu movie={movie} />
  <img src={`${movie.poster_path}`} alt="film" />
  <div className="flex flex-row align-top justify-between mt-3">
    <div className="flex flex-col">
      <MovieName name={movie.title} />
      <MovieGenre genre={movie.genres} />
    </div>
    <div>
      <MovieYear date={movie.release_date} />
    </div>
  </div>
</div>)
  }
  </>
    
  );
};

export default MovieItem;
