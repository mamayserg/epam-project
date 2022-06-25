// import { genreNames } from "../constants/genre"

export const getGenreNames = (genres = []) => {
 const joinString = (genres.length ===1 && '') || (genres.length ===2 &&' & ') || ', ';
 
  // const names = genre.map((item) => genreNames[item])
 
    return genres.join(joinString)
}