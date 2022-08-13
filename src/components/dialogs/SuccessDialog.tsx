import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';

type SuccessDialogProps = {
  open: boolean,
  handleClose: () => void
}

export default function SuccessDialog({ handleClose, open }: SuccessDialogProps) {
  
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
      <DialogTitle className="mt-4 flex flex-col items-center text-white uppercase">
       <CheckCircleIcon 
        color="error"
        sx={{
          fontSize: "55px"
        }}/>
       <div className="mt-2 mb-1 title"> Congratulations !</div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText className=" text-center mt-4">
         The movie has been added to database successfully
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
