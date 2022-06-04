import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function DeleteMovieDialog({ handleClose, open, id }) {
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
        <DialogContentText className="subtitle">
          Are you sure want to delete movie?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          className="mb-4 text-white bg-red-100 uppercase font-light"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
