import React from "react";
import navbarStyles from "./styles";

const { AppBar, Typography, Button, Toolbar } = require("@material-ui/core");

const NavBar = () => {
  const classes = navbarStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit" className={classes.btn}>
            logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
