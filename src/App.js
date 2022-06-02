import { Route, Routes, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import SearchCard from "./components/searchCard/SearchCard";
import SelectedMovieCard from "./components/selectedMovieCard/SelectedMovieCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<SearchPage />}>
            <Route path="" element={<SearchCard />} />
            <Route path=":id" element={<SelectedMovieCard />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
