import { Snackbar } from "@material-ui/core";
import React from "react";

const Notify = ({ open, message, severity }) => {
  return (
    <Snackbar
      open={open}
      severity={severity}
      autoHideDuration={6000}
      message={message}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    />
  );
};

export default Notify;
