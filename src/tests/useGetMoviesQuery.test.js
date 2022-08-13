import React from "react";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store } from '../store'
import { useGetMoviesQuery } from '../services/movies.service.js';

enableFetchMocks()

beforeEach(() => {
  fetchMock.resetMocks();
});

const wrapper = ({ children }) => {
  return (<Provider store={store}>{children}</Provider>);
}

describe("useGetMoviesQuery", () => {
  it("should return correct data from response", async () => {
    const moviesData = [{}]

    fetchMock.mockResponse(JSON.stringify(moviesData));

    const { result, waitForNextUpdate } = renderHook(
      () => useGetMoviesQuery(),
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

  })
})
