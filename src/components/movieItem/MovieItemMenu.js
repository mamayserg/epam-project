import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CreateEditMovieDialog from "../dialogs/CreateEditMovieDialog";
import DeleteMovieDialog from "../dialogs/DeleteMovieDialog";

export default function MovieItemMenu({ isOpen, id, anchorEl, handleClose }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleDelete = () => {
    setOpenDelete(true);
  };
  const handleEdit = () => {
    setOpenEdit(true);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={!!isOpen}
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
        <MenuItem onClick={handleEdit}>
          <span className="text-xs text-white font-light">Edit</span>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <span className="text-xs	text-white font-light">Delete</span>
        </MenuItem>
      </Menu>
      <CreateEditMovieDialog
        handleClose={() => {
          setOpenEdit(false);
        }}
        open={openEdit}
        id={id}
      />
      <DeleteMovieDialog
        handleClose={() => {
          setOpenDelete(false);
        }}
        open={openDelete}
        id={id}
      />
    </>
  );
}
