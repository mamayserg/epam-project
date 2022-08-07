import { useGetMovieQuery } from "../../../services/movies.service";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import { store } from '../../../store'
import { Provider } from "react-redux";
import React from 'react';

enableFetchMocks()

beforeEach(() => {
  fetchMock.resetMocks();
});

const wrapper = ({ children }) => {
  return (<Provider store={store}>{children}</Provider>);
}

describe('SelectedMovieCard', ()=>{
  it("renders useGetMovieQuery", async () => {
    const moviesData = {budget: 200000000,
      genres: ["Fantasy", "Adventure", "Science Fiction"],
      id: 181808,
      overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      release_date: "2017-12-13",
      revenue: 1325937250,
      runtime: 152,
      tagline: "The Saga Continues",
      title: "Star Wars: The Last Jedi",
      vote_average: 7.1,
      vote_count: 4732,}

    fetchMock.mockResponse(JSON.stringify(moviesData));

    const { result, waitForNextUpdate } = renderHook(
      () => useGetMovieQuery(),
      { wrapper }
    );
    
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    await waitForNextUpdate({ timeout: 1000 });
    const nextResponse = result.current;
    expect(nextResponse.data).toEqual(moviesData);
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
});
})
