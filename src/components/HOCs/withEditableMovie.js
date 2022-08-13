import { useState, useEffect } from "react";

export const withEditableMovie = (Component) => {
  return (props) => {
    const [originalMovie, setOriginalMovie] = useState(null);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
      setMovie(props.selectedMovie);
      setOriginalMovie(props.selectedMovie);
    }, [props.selectedMovie]);

    const onChangeMovie = (changes) => {
      setMovie({ ...movie, ...changes });
    };

    const onSaveMovie = (validatedMovie) => {
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
        onSaveMovie={onSaveMovie}
      />
    );
  };
};
