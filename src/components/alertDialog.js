import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { useSelector } from "react-redux";


export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const serverMsgState = useSelector(state => state.serverMsg);

  useEffect(() => {
    if (serverMsgState.showed !== 0) setOpen(true);
  }, [serverMsgState.showed]);



  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Server Message</DialogTitle>
        <DialogContent>
          <DialogContentText>{serverMsgState.msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
