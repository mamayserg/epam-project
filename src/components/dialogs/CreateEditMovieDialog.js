import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { movieGenre } from "../../constants";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { withEditableMovie } from "../HOCs/withEditableMovie";

const CreateEditMovieDialog = withEditableMovie(
  ({
    handleClose,
    open,
    selectedMovie,
    movie,
    onChangeMovie,
    onResetMovie,
    onSaveMovie,
  }) => {
    const { title, muvie_url, genre, release_date, ruting, runtime, overview } =
      movie || {};

    const handleChildClick = (e) => {
      e.stopPropagation();
    };

    const handleOnSaveMovie = () => {
      onSaveMovie();
      handleClose();
    };

    return (
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
        </DialogTitle>
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

              <TextField
                className="input-field mt-4"
                id="title"
                fullWidth
                label="Title"
                type="text"
                placeholder="Input title"
                variant="standard"
                value={title}
                onChange={(e) => onChangeMovie({ title: e.target.value })}
              />
              <TextField
                className="input-field mt-4"
                id="muvie_url"
                label="Muvie URL"
                type="text"
                placeholder="input Muvie URL"
                fullWidth
                variant="standard"
                value={muvie_url}
                onChange={(e) => onChangeMovie({ muvie_url: e.target.value })}
              />
              <TextField
                className="input-field mt-4"
                id="genre"
                select
                label="Genre"
                fullWidth
                placeholder="Select genre"
                variant="standard"
                value={genre}
                onChange={(e) => onChangeMovie({ genre: e.target.value })}
              >
                {movieGenre.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id="release_date"
                  label="Release date"
                  value={release_date}
                  onChange={(value) => onChangeMovie({ release_date: value })}
                  renderInput={(params) => (
                    <TextField
                      className="input-field mt-4"
                      fullWidth
                      variant="standard"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <TextField
                className="input-field mt-4"
                id="ruting"
                fullWidth
                label="Ruting"
                type="number"
                placeholder="Input ruting"
                variant="standard"
                value={ruting}
                onChange={(e) => onChangeMovie({ ruting: e.target.value })}
              />
              <TextField
                className="input-field mt-4"
                id="runtime"
                fullWidth
                label="untime"
                type="text"
                placeholder="Input runtime"
                variant="standard"
                value={runtime}
                onChange={(e) => onChangeMovie({ runtime: e.target.value })}
              />
            </div>
          </div>
          <TextareaAutosize
            label="overview"
            id="overview"
            className=" bg-gray-300 text-white pl-2 mt-8"
            aria-label="minimum height"
            minRows={3}
            placeholder="Muvie overview"
            style={{ width: "100%" }}
            value={overview}
            onChange={(e) => onChangeMovie({ overview: e.target.value })}
          />
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
            onClick={handleOnSaveMovie}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);
export default CreateEditMovieDialog;
