import { genreNames } from "../constants/genre"

export const getGenreNames = (genre = []) => {
 const joinString = (genre.length ===1 && '') || (genre.length ===2 &&' & ') || ', ';
 
  const names = genre.map((item) => genreNames[item])
 
    return names.join(joinString)
}