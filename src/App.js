import { Route, Routes, Navigate } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import SearchCard from "./components/searchCard/SearchCard";
import SelectedMovieCard from "./components/selectedMovieCard/SelectedMovieCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from './store/index';
import { Provider } from "react-redux";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
    <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
