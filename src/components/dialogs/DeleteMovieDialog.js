import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteMovieDialog({ handleClose, open, id }) {
  return (
    <Dialog maxWidth={'sm'} fullWidth open={open} onClose={handleClose} >
      <DialogTitle className="mt-4 title text-white uppercase">
        Delete movie
      </DialogTitle>
      <DialogContent>
        <DialogContentText className="subtitle">
          Are you sure want to delete movie?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}  className="mb-4">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
