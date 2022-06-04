import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { movieGenre } from '../../constants';
import MenuItem from '@mui/material/MenuItem';

export default function CreateEditMovieDialog({ handleClose, open, id }) {
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Dialog maxWidth={"sm"} fullWidth  open={open} onClose={handleClose} onClick={handleChildClick}>
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
        {id ? "Edit movie" : "Add movie"}
      </DialogTitle>
      <DialogContent>

        <div>
      <TextField
        className="input-field"
          id="title"
          label="Title"
          type="text"
          placeholder="Input title"
          fullWidth
          variant="standard"
        />
        <TextField
        className="input-field"
          id="muvie_url"
          label="Muvie URL"
          type="text"
          placeholder="input Muvie URL"
          fullWidth
          variant="standard"
        />
        <TextField
         className="input-field"
          id="genre"
          select
          label="Genre"
          // value={currency}
          // onChange={handleChange}
          fullWidth
          placeholder="Select genre"
          variant="standard"
        >
          {movieGenre.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div>
      <TextField
        className="input-field"
          id="name"
          label="Email Address"
          type="email"
          placeholder="input name"
          fullWidth
          variant="standard"
        />
        <TextField
        className="input-field"
          id="ruting"
          label="Ruting"
          type="number"
          placeholder="Input ruting"
          fullWidth
          variant="standard"
        />
       <TextField
        className="input-field"
          id="runtime"
          label="untime"
          type="text"
          placeholder="Input runtime"
          fullWidth
          variant="standard"
        />
        </div>

      </DialogContent>
      <DialogActions>
        <Button
          className=" uppercase  text-red-100 font-light"
          color="error"
          variant="outlined"
          onClick={handleClose}
        >
          Reset
        </Button>
        <Button
          className=" uppercase  text-white bg-red-100 font-light"
          variant="contained"
          onClick={handleClose}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
