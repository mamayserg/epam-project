import Header from "../layout/Header";
import "./selectedMovieCard.css"
import MovieGenre from "../movieItem/MovieGenre";

const SelectedMovieCard = () => (
  <div className="bg-gray-500">
    <Header isMovieCard />
    <div className="flex justify-start w-full px-10 my-4 selected-movie-card">
     <img className="selected-card--img mr-10 z-10"  src={require(`../../images/film.jpg`)} alt="film"/> 
      <div className="flex flex-col items-start">
        <h1 className="title text-white pb-2 uppercase "> The Card Counter</h1>
        <MovieGenre genre="Trailer & Comedy"/>
      </div>
    </div>
  </div>
);

export default SelectedMovieCard;
