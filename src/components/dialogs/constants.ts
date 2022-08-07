import * as yup from "yup";
import { Movie } from "../../interfaces/movie.interface"

export const defaultMovie: Partial<Movie> = {
  title: "",
  poster_path: "",
  genres: [],
  release_date: "",
  vote_average: "",
  runtime: "",
  overview: "",
};

// eslint-disable-next-line max-len
const URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

export const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  poster_path: yup
    .string()
    .matches(URL, 'Enter a valid url')
    .required("Movie URL is required"),
  genres: yup
    .array()
    .min(1, "Enter movie genre")
    .required("Genre is required"),
  vote_average: yup
    .number()
    .required("Genre is required"),
  runtime: yup.number().required("Runtime is required"),
  overview: yup.string().required("Overview is required"),
  release_date: yup.date().required("Date field is required"),
});