export const getGenreNames = (genres: Array<string> = []) => {
 const joinString = (genres.length ===1 && '') || (genres.length ===2 &&' & ') || ', ';
  
    return genres.join(joinString)
}