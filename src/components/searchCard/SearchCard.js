import Header from "../layout/Header";
import SearchBar from "./SearchBar";

const SearchCard = () => (
  <div className="bg-gray-300">
    <Header />
    <div className="flex justify-center w-full mt-8 mb-24 search-card">
      <div className="flex flex-col items-start w-3/6">
        <h1 className="title text-white pb-8">FIND YOUR MOVIE</h1>
        <SearchBar />
      </div>
    </div>
  </div>
);

export default SearchCard;
