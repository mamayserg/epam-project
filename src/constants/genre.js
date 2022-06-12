export const genre = {
  DOCUMENTARY: "documentery",
  COMEDY: "comedy",
  HORROR: "horror",
  CRIME: "crime",
  ROMANCE: "romance",
  DRAMA: "drama",
};

export const genreNames = {
  [genre.DOCUMENTARY]: "Documentery",
  [genre.COMEDY]: "Comedy",
  [genre.HORROR]: "Horror",
  [genre.CRIME]: "Crime",
  [genre.ROMANCE]: "Romance",
  [genre.DRAMA]: "Drama",
};

export const movieGenre = () => {
  return Object.keys(genre).map((key) => ({
    name: genreNames[genre[key]],
    value: genre[key],
  }));
};

