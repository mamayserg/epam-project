
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CreateEditMovieDialog from "../dialogs/CreateEditMovieDialog";
import DeleteMovieDialog from "../dialogs/DeleteMovieDialog";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";

const IgnoreDisabledListItem = React.forwardRef(function IgnoreDisabledListItem(
  { disabled, ...other },
  ref
) {
  return <ListItem {...other} ref={ref} />;
});


export default function MovieItemMenu({ movie }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleDelete = (e) => {
    setOpenDelete(true);
    handleClose(e)
    e.stopPropagation();
  };
  const handleEdit = (e) => {
    setOpenEdit(true);
    handleClose(e)
    e.stopPropagation();
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    e.stopPropagation();
  };

  return (
    <>
      <IconButton
        className=" absolute top-0 right-0 z-10"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
                <IgnoreDisabledListItem disabled>

         <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 0,
            top: -10,
            color: "white",
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        </IgnoreDisabledListItem>

        <MenuItem onClick={handleEdit}>
          <span className="text-xs text-white font-light w-20">Edit</span>
        </MenuItem>
        <MenuItem onClick={handleDelete}> 
          <span className="text-xs	text-white font-light w-20">Delete</span>
        </MenuItem>
      </Menu>

      <CreateEditMovieDialog
        handleClose={() => {
          setOpenEdit(false);
        }}
        open={openEdit}
        selectedMovie={movie}
      />
      <DeleteMovieDialog
        handleClose={() => {
          setOpenDelete(false);
        }}
        open={openDelete}
        id={movie.id}
      />
    </>
  );
}
