import Header from "../layout/Header";
import SearchBar from "./SearchBar";
import ErrorBoundary from "../common/ErrorBoundary";

const SearchCard = () => (
  <div className="search-card--wrap bg-gray-600">
    <div className="search-card">
      <Header />
      <div className="flex justify-center w-full mt-6 mb-24 search-card--bar">
        <div className="flex flex-col items-start w-3/6">
          <h1 className="title text-white pb-8 uppercase">Find your movie</h1>
          <ErrorBoundary key="ErrorBoundary">
            <SearchBar key="dddErrorBoundary" />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  </div>
);

export default SearchCard;
