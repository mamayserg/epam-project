const SearchBar = () => {
  return (
    <div className="flex flex-row w-full">
      <input className="w-full  bg-gray-500 text-white" />
      <button className=" w-40 mr-4 py-2 text-base text-white bg-red-100  hover:bg-opacity-80 ">
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
