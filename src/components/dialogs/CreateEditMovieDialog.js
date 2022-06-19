import { useEffect, useState } from "react";
import { useFormik } from "formik";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { movieGenre } from "../../constants/genre";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import { withEditableMovie } from "../HOCs/withEditableMovie";
import { validationSchema } from "./constants";

import {
  useCreateMovieMutation,
  useEditMovieMutation,
} from "../../services/movies.service";
import SuccessDialog from "../dialogs/SuccessDialog";
import ErrorIcon from "@mui/icons-material/Error";

const CreateEditMovieDialog = withEditableMovie(
  ({
    handleClose,
    open,
    selectedMovie,
    movie,
    onChangeMovie,
    onResetMovie,
  }) => {
    const {
      title,
      poster_path,
      genres,
      release_date,
      vote_average,
      runtime,
      overview,
    } = movie || {};

    const [openSuccess, setOpenSuccess] = useState(false);

    const [
      createMovie,
      {
        isLoading: createIsLoading,
        isSuccess: createIsSuccess,
        error: createError,
      },
    ] = useCreateMovieMutation();
    const [
      editMovie,
      { isLoading: editIsLoading, isSuccess: editIsSuccess, error: editError },
    ] = useEditMovieMutation();

    const handleChildClick = (e) => {
      e.stopPropagation();
    };

    const onCreateMovie = async (movie) => {
      await createMovie(movie);
      console.log("object :>> ", createIsSuccess, createIsLoading);
      if (createIsSuccess && !createIsLoading) {
        handleClose();
        setOpenSuccess(true);
      }
    };

    const onEditMovie = async (movie) => {
      await editMovie(movie);
      if (editIsSuccess && !editIsLoading) {
        handleClose();
      }
    };

    const handleOnSaveMovie = (movie) => {
      if (selectedMovie.id) {
        onEditMovie(movie);
      } else {
        onCreateMovie(movie);
      }
    };

    const formik = useFormik({
      initialValues: { ...movie },
      enableReinitialize: true,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        handleOnSaveMovie(values);
      },
    });

    useEffect(() => {
      formik.initialValues = movie;
    }, [formik, movie]);

    return (
      <>
        <Dialog
          maxWidth={"sm"}
          fullWidth
          open={open}
          onClose={handleClose}
          onClick={handleChildClick}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle className="title text-white uppercase">
            {selectedMovie?.id ? "Edit movie" : "Add movie"}
            {createError}
            {(editError || createError) && (
              <div className="text-red-100 text-center text-sm">
                {" "}
                <ErrorIcon color="error" />{" "}
                {`Error during ${
                  selectedMovie?.id ? "edititing " : " creatind"
                } movie !`}{" "}
              </div>
            )}
          </DialogTitle>
          <form onSubmit={formik.handleSubmit}>
            <DialogContent>
              <div className="grid grid-cols-3 items-end gap-5">
                <div className="col-span-2">
                  {selectedMovie?.id && (
                    <TextField
                      className="input-field mt-4"
                      id="movie_id"
                      fullWidth
                      label="Movie id"
                      type="text"
                      disabled
                      variant="standard"
                      value={selectedMovie?.id}
                    />
                  )}

                  <InputLabel
                    id="title"
                    className="text-red-100 uppercase text-xs font-light mt-4"
                  >
                    Title
                  </InputLabel>
                  <TextField
                    className="input-field"
                    id="title"
                    fullWidth
                    type="text"
                    placeholder="Input title"
                    variant="standard"
                    value={title}
                    onChange={(e) => {
                      formik.handleChange(e);
                      onChangeMovie({ title: e.target.value });
                    }}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                  />

                  <InputLabel
                    id="poster_path"
                    className="text-red-100 uppercase text-xs font-light mt-4"
                  >
                    Muvie URL
                  </InputLabel>
                  <TextField
                    className="input-field mb-4"
                    id="poster_path"
                    type="text"
                    placeholder="input Muvie URL"
                    fullWidth
                    variant="standard"
                    value={poster_path}
                    onChange={(e) => {
                      formik.handleChange(e);
                      onChangeMovie({ poster_path: e.target.value });
                    }}
                    error={
                      formik.touched.poster_path &&
                      Boolean(formik.errors.poster_path)
                    }
                    helperText={
                      formik.touched.poster_path && formik.errors.poster_path
                    }
                  />
                  <InputLabel
                    id="genres"
                    className="text-red-100 uppercase text-xs font-light"
                  >
                    Genre
                  </InputLabel>
                  <FormControl className="w-full" id="genres">
                    <Select
                      label="Genre"
                      className="input-field  w-full"
                      id="genres"
                      multiple
                      variant="standard"
                      value={genres}
                      onChange={(e) => {
                        formik.handleChange(e);
                        onChangeMovie({
                          genres:
                            typeof e.target.value === "string"
                              ? e.target.value.split(",")
                              : e.target.value,
                        });
                      }}
                      error={
                        formik.touched.genres && Boolean(formik.errors.genres)
                      }
                    >
                      {movieGenre().map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.touched.genres && formik.errors.genres && (
                      <FormHelperText className="text-red-100">
                        {formik.errors.genres}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <InputLabel
                      id="release_date"
                      className="text-red-100 uppercase text-xs font-light mt-4"
                    >
                      Release date
                    </InputLabel>
                    <DatePicker
                      id="release_date"
                      value={release_date}
                      onChange={(value) => {
                        onChangeMovie({ release_date: value });
                      }}
                      renderInput={(params) => (
                        <>
                          <TextField
                            className="input-field "
                            fullWidth
                            variant="standard"
                            {...params}
                            error={
                              formik.touched.release_date &&
                              Boolean(formik.errors.release_date)
                            }
                            helperText={
                              formik.touched.release_date &&
                              formik.errors.release_date
                            }
                          />
                        </>
                      )}
                    />
                  </LocalizationProvider>

                  <InputLabel
                    id="vote_average"
                    className="text-red-100 uppercase text-xs font-light mt-4"
                  >
                    Ruting
                  </InputLabel>
                  <TextField
                    className="input-field"
                    id="vote_average"
                    fullWidth
                    type="number"
                    placeholder="Input ruting"
                    variant="standard"
                    value={vote_average}
                    onChange={(e) => {
                      formik.handleChange(e);
                      onChangeMovie({ vote_average: Number(e.target.value) });
                    }}
                    error={
                      formik.touched.vote_average &&
                      Boolean(formik.errors.vote_average)
                    }
                    helperText={
                      formik.touched.vote_average && formik.errors.vote_average
                    }
                  />

                  <InputLabel
                    id="runtime"
                    className="text-red-100 uppercase text-xs font-light mt-4"
                  >
                    Runtime
                  </InputLabel>
                  <TextField
                    className="input-field"
                    id="runtime"
                    fullWidth
                    type="number"
                    placeholder="Input runtime"
                    variant="standard"
                    value={runtime}
                    onChange={(e) => {
                      formik.handleChange(e);
                      onChangeMovie({ runtime: Number(e.target.value) });
                    }}
                    error={
                      formik.touched.runtime && Boolean(formik.errors.runtime)
                    }
                    helperText={formik.touched.runtime && formik.errors.runtime}
                  />
                </div>
              </div>
              <FormControl className="w-full">
              <InputLabel
                    id="overview"
                    className="text-red-100 uppercase text-xs font-light "
                  >
                    Overview
                  </InputLabel>
                <TextareaAutosize
                  id="overview"
                  className=" bg-gray-300 text-white pl-2 mt-8"
                  aria-label="minimum height"
                  minRows={3}
                  maxRows={5}
                  placeholder="Muvie overview"
                  style={{ width: "100%" }}
                  value={overview}
                  onChange={(e) => {
                    onChangeMovie({ overview: e.target.value });
                  }}
                />
                {formik.touched.overview && formik.errors.overview && (
                  <FormHelperText className="text-red-100">
                    {formik.errors.overview}
                  </FormHelperText>
                )}
              </FormControl>
            </DialogContent>

            <DialogActions>
              <Button
                className=" uppercase  text-red-100 font-light w-36"
                color="error"
                variant="outlined"
                onClick={onResetMovie}
              >
                Reset
              </Button>
              <Button
                className=" uppercase  text-white bg-red-100 font-light w-36"
                variant="contained"
                type="submit"
                loading={
                  selectedMovie?.id
                    ? createIsLoading.toString()
                    : editIsLoading.toString()
                }
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <SuccessDialog
          handleClose={() => {
            setOpenSuccess(false);
          }}
          open={openSuccess}
        />
      </>
    );
  }
);
export default CreateEditMovieDialog;
