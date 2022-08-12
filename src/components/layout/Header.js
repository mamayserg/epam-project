import {useState} from "react";
import NetflixLogo from "./NetflixLogo";
import Link from 'next/link'
import { VscSearch } from "react-icons/vsc";
import CreateEditMovieDialog from "../dialogs/CreateEditMovieDialog";
import { defaultMovie } from "../dialogs/constants";

const Header = ({ isMovieCard }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header className="py-4 px-10 sticky top-0 h-18 w-full">
      <div className="text-left flex flex-row justify-between align-top">
        <NetflixLogo opacity={isMovieCard ? 0.7 : 1} />
        {isMovieCard ? (
          <Link href="/search">
             <a>
            <VscSearch className="text-red-100 mt-2 text-lg" />
            </a>
          </Link>
        ) : (
          <button
            onClick={handleClickOpen}
            className="px-4 py-2 text-base text-red-100 bg-gray-400 bg-opacity-70 hover:bg-opacity-100"
          >
            + ADD MOVIE
          </button>
        )}
      </div>
      <CreateEditMovieDialog handleClose={handleClose} open={open} selectedMovie={defaultMovie} />
    </header>
  );
};
export default Header;
