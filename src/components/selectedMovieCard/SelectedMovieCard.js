import Header from "../layout/Header";
import "./selectedMovieCard.css";
import MovieGenre from "../movieItem/MovieGenre";
import { useGetMovieQuery } from "../../services/movies.service";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SelectedMovieCard = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const { data, isLoading, error } = useGetMovieQuery(id);

  useEffect(()=>{
    if ( error ) {
      navigate(`/search`)
    }
    // eslint-disable-next-line 
  }, error )

  return (
    <div className="bg-gray-500">
      <Header isMovieCard />
      <div className="flex justify-start w-full px-10 my-4 selected-movie-card">
        {isLoading || error ? (
          <Skeleton  className="selected-card--img mr-10 z-10" variant="rectangular" width="40%" height={400} />
        ) : (
          <img
            className="selected-card--img mr-10 z-10"
            src={`${data.poster_path}`}
            alt="film"
          />
        )}
        <div className="flex flex-col items-start w-full">
          {isLoading || error ? (
            <>
             <div className="flex flex-row  w-5/6 items-center justify-between"> <Skeleton
                animation="wave"
                height={25}
                width="90%"
                style={{ marginBottom: 15, marginTop: 15, marginright: 15 }}
              />  <Skeleton variant="circular" height={30} width={30}  style={{ marginleft: 15}}/> </div>
              <Skeleton animation="wave" height={15} width="60%"  style={{ marginBottom: 10, marginTop: 10 }}/>
              <Skeleton animation="wave" height={20} width="80%"  style={{ marginBottom: 15, marginTop: 15 }}/>
              <Skeleton animation="wave" height={20} width="80%"  style={{ marginBottom: 15, marginTop: 15 }} />
              <Skeleton animation="wave" height={20} width="80%"  style={{ marginBottom: 15, marginTop: 15 }} />

            </>
          ) : (
            <>
              <h1 className="title text-white pb-2 uppercase ">
                {data.title}
              </h1>
              <MovieGenre genre={data.genres} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedMovieCard;
