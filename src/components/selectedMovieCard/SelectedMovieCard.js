import Header from "../layout/Header";

const SelectedMovieCard = () => (
  <div className="bg-gray-500">
    <Header isMovieCard />
    <div className="flex justify-center w-full mt-12 mb-28 selected-movie-card">
      <div className="flex flex-col items-start w-3/6">
        <h1 className="title text-white pb-8">FIND YOUR MOVIE</h1>
      </div>
    </div>
  </div>
);

export default SelectedMovieCard;
