const MoviesFound = ({ count = 0 }) => (
  <div className="text-white font-light py-4">
    <span className=" font-medium">{count}</span> Movies found
  </div>
);
export default MoviesFound;
