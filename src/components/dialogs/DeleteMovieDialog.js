import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDeleteMovieMutation } from "../../services/movies.service";
import { useEffect } from "react";

export default function DeleteMovieDialog({ handleClose, open, id }) {
  const [deleteMovie, { isLoading, isSuccess, isUnnitialized, error }] =
    useDeleteMovieMutation();
  useEffect(() => {
    if (!isUnnitialized && isSuccess && !error) {
      handleClose();
    }
    // eslint-disable-next-line
  }, [isSuccess, isUnnitialized, error]);

  const onDeleteMovie = (e) => {
    deleteMovie(id);
    e.stopPropagation();
  };

  return (
    <Dialog maxWidth={"sm"} fullWidth open={open} onClose={handleClose}>
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
      <DialogTitle className="mt-4 title text-white uppercase">
        Delete movie
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={`subtitle ${error && "text-red-100"}`}>
          {error
            ? "An error occurred while deleting the video"
            : "Are you sure want to delete movie?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          className="mb-4 text-white bg-red-100 uppercase font-light w-36"
          loading={isLoading.toString()}
          onClick={onDeleteMovie}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
