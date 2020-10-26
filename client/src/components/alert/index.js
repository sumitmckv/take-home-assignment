import { Snackbar } from "@material-ui/core";
import React from "react";

const Notify = ({ open, message, severity }) => {
  return <Snackbar open={open} autoHideDuration={6000} message={message} />;
};

export default Notify;
