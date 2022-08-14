import Header from "../layout/Header";
import MovieGenre from "../movieItem/MovieGenre";
import { useGetMovieQuery } from "../../services/movies.service";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect } from "react";
import { getYearFromDate } from "../../helpers/getYear.helper";
import { minutesConvert } from "../../helpers/convertMinutes.helper";

const SelectedMovieCard = () => {
  const router = useRouter();

  const { data, isLoading, error } = useGetMovieQuery(router.query.id);

  useEffect(() => {
    if (error) {
      router.push(`/search`);
    }
  }, [error, router]);

  return (
    <div className="bg-gray-500">
      <Header isMovieCard />
      <div className="flex justify-start w-full px-10 my-4 selected-movie-card">
        {isLoading || error ? (
          <Skeleton
            className="selected-card--img mr-10 z-10"
            variant="rectangular"
            width="40%"
            height={400}
          />
        ) : (
          <Image
            width="500"
            height="440"
            className="selected-card--img mr-10 z-10"
            src={`${data.poster_path}`}
            alt="film"
          />
        )}
        <div className="flex flex-col items-start w-full">
          {isLoading || error ? (
            <>
              <div className="flex flex-row  w-5/6 items-center justify-between">
                {" "}
                <Skeleton
                  animation="wave"
                  height={25}
                  width="90%"
                  style={{ marginBottom: 15, marginTop: 15, marginRight: 15 }}
                />{" "}
                <Skeleton
                  variant="circular"
                  height={30}
                  width={30}
                  style={{ marginLeft: 15 }}
                />{" "}
              </div>
              <Skeleton
                animation="wave"
                height={15}
                width="60%"
                style={{ marginBottom: 10, marginTop: 10 }}
              />
              <Skeleton
                animation="wave"
                height={20}
                width="80%"
                style={{ marginBottom: 15, marginTop: 15 }}
              />
              <Skeleton
                animation="wave"
                height={20}
                width="80%"
                style={{ marginBottom: 15, marginTop: 15 }}
              />
              <Skeleton
                animation="wave"
                height={20}
                width="80%"
                style={{ marginBottom: 15, marginTop: 15 }}
              />
            </>
          ) : (
            <>
              <div className="flex flex-row items-center">
                <h1 className="title text-white pb-2 uppercase ">
                  {data.title}
                </h1>
                <div className="text-white ml-5 border-solid border-white border-2 rounded-full p-4">
                  {data.vote_average}
                </div>
              </div>
              <MovieGenre genre={data.genres} />
              <div className="text-red-100 text-2xl font-light mt-3 flex flex-row items-center">
                <div>{getYearFromDate(data.release_date)}</div>
                <div className="ml-20">{minutesConvert(data.runtime)}</div>
              </div>
              <div className="text-white mt-6 font-light text-lg opacity-50">
                {data.overview}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedMovieCard;
