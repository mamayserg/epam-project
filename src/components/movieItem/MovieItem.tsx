import React from 'react';

import MovieGenre from "./MovieGenre";
import MovieName from "./MovieName";
import MovieYear from "./MovieYear";
import MovieItemMenu from "./MovieItemMenu";
import Image from 'next/image'
import Skeleton from "@mui/material/Skeleton";
import { Movie } from "../../interfaces/movie.interface"

type MovieItemProps = {
  isLoading: boolean,
  movie: Movie,
  onClickComponent: (movie: Movie)=> void;
}

const MovieItem = ({ movie, onClickComponent, isLoading }: MovieItemProps) => {
  const onClick = () => onClickComponent(movie);

  return (
    <>
      {isLoading && (
        <div className="mb-10">
          <Skeleton variant="rectangular" height={310} />
          <Skeleton
            animation="wave"
            height={10}
            style={{ marginBottom: 15, marginTop: 15 }}
          />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
      )}
      {!isLoading && (
        <div
          className="movie-item flex justify-between flex-col relative cursor-pointer"
          onClick={onClick}
        >
          <MovieItemMenu movie={movie} />
          <Image
            width="200"
            height="480"
            className="movie-item-img"
            src={`${movie.poster_path}`}
            alt="film"
          />
          <div className="flex flex-row align-top justify-between mt-3">
            <div className="flex flex-col">
              <MovieName name={movie.title} />
              <MovieGenre genre={movie.genres} />
            </div>
            <div>
              <MovieYear date={movie.release_date} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieItem;
