export const genre = {
  DOCUMENTARY: "Documentery",
  COMEDY: "Comedy",
  HORROR: "Horror",
  CRIME: "Crime",
  ACTION: "Action",
  ROMANCE: "Romance",
  ADVENTURE: "Adventure",
  FANTASY: "Fantasy",
  FICTION: "Fiction",
  THRILLER : "Thriller",
  SCIENCE: "Science",
  WESTERN: "Western",
};

export const genreNames = {
  [genre.WESTERN]: "Western",
  [genre.SCIENCE]: "Thriller",
  [genre.THRILLER]: "Thriller",
  [genre.HORROR]: "Horror",
  [genre.ROMANCE]: "Romance",
  [genre.ACTION]: "Action",
  [genre.ADVENTURE]: "Adventure",
  [genre.FANTASY]: "Fantasy",
  [genre.COMEDY]: "Comedy",
  [genre.DOCUMENTARY]: "Documentery",
  [genre.DRAMA]: "Drama",
  [genre.CRIME]: "Crime",
  [genre.FICTION]: "Fiction",
};

export const movieGenre = () => {
  return Object.keys(genre).map((key) => ({
    name: genreNames[genre[key]],
    value: genre[key],
  }));
};
