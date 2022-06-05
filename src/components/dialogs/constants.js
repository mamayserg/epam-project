import * as yup from "yup";

export const defaultMovie = {
  title: "",
  muvie_url: "",
  genre: "",
  release_date: "",
  ruting: "",
  runtime: "",
  overview: "",
};

export const validationSchema = yup.object({
  title: yup.string("Enter movie title").required("Title is required"),
  muvie_url: yup
  .string("Enter movie URL")
  .min(8, "Password should be of minimum 8 characters length")
  .required("Movie URL is required"),
  genre: yup.string("Enter movie genre").required("Genre is required"),
  ruting: yup
    .number("Enter movie ruting as a number")
    .required("Genre is required"),
  runtime: yup.string("Enter movie Runtime").required("Runtime is required"),
});

// release_date: yup
// .string("Enter movie Release date")
// .required("Release date is required"),
// overview: yup
// .string("Enter overview")
// .min(80, "Password should be of minimum 50 characters length")
// .required("Overview is required"),
