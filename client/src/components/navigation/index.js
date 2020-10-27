import React from "react";
import { useHistory } from "react-router-dom";
import { post } from "../../api";
import navbarStyles from "./styles";

const { AppBar, Typography, Button, Toolbar } = require("@material-ui/core");

const NavBar = () => {
  const classes = navbarStyles();
  const history = useHistory();

  const logout = async (e) => {
    e.preventDefault();
    try {
      await post("/api/logout");
      localStorage.removeItem("token");
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Dashboard
          </Typography>
          <Button onClick={logout} color="inherit" className={classes.btn}>
            logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
