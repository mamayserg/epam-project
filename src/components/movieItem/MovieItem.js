import { useState } from "react";
import MovieGenre from "./MovieGenre";
import MovieName from "./MovieName";
import MovieYear from "./MovieYear";
import MovieItemMenu from "./MovieItemMenu";

const MovieItem = ({ movie }) => {
  const [open, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setOpenMenu((prevState) => {
      return prevState !== movie.id ? movie.id : false;
    });
    setAnchorEl(event.currentTarget);
  };

  const handleClose  = () => {
    setAnchorEl(null)
  };
  return (
    <div
      className="movie-item relative cursor-pointer"
      onClick={openMenu}
    >
      <MovieItemMenu isOpen={open} id={movie.id} anchorEl={anchorEl} handleClose={handleClose} />
      <img src={require(`../../images/film.jpg`)} alt="film" />
      <div className="flex flex-row align-top justify-between mt-3">
        <div className="flex flex-col">
          <MovieName name={movie.name} />
          <MovieGenre genre={movie.genre} />
        </div>
        <div>
          <MovieYear year={movie.year} />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
