import React, { useState, useEffect, ComponentType } from "react";
import { MovieData} from "../../interfaces/movie.interface"

type withEditableMovieProps = {
  selectedMovie: Partial<MovieData>,
    handleClose: ()=> void,
     open: boolean 
    }

export const withEditableMovie = (Component: ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: withEditableMovieProps) => {
    const [originalMovie, setOriginalMovie] = useState<Partial<MovieData>>({});
    const [movie, setMovie] = useState<Partial<MovieData>>({});
    useEffect(() => {
      setMovie(props.selectedMovie);
      setOriginalMovie(props.selectedMovie);
    }, [props.selectedMovie]);

    const onChangeMovie = (changes: Partial<MovieData>) => {
      setMovie({ ...movie, ...changes });
    };

    const onResetMovie = () => {
      setMovie(originalMovie);
    };

    return (
      <Component
        {...props}
        movie={movie}
        onChangeMovie={onChangeMovie}
        onResetMovie={onResetMovie}
      />
    );
  };
};
