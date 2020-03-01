import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";


export default () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Payment Simulation
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
