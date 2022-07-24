import { useGetMovieQuery } from "../../../services/movies.service";
import { renderHook } from "@testing-library/react-hooks";
import { useInput } from "../../../hooks/use-input";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
// describe('SelectedMovieCard', ()=>{
test("renders useGetMovieQuery", () => {
  const {result, rerender} = renderHook(() => useGetMovieQuery(), { wrapper });
  console.log("datrerendera :>> ", result);

  console.log("data :>> ",rerender);
});
// })
