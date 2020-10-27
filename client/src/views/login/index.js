import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { post } from "../../api";
import Notify from "../../components/alert";
import { useInput } from "../../hooks";
import loginStyle from "./styles";

const Login = () => {
  const classes = loginStyle();
  const history = useHistory();
  const [email, setEmail] = useInput("user@gmail.com");
  const [password, setPassword] = useInput("StrongPassword123");
  const [message, setMessage] = useState("Failed to login");
  const [severity, setSeverity] = useState("warning");
  const [open, setOpen] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { success, message } = await post("/api/login", {
        email,
        password,
      });
      if (success) {
        history.push("/");
        setSeverity("success");
      }
      setMessage(message);
      setOpen(true);
    } catch (error) {
      setOpen(true);
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.cardContainer}
    >
      <Grid item xs={12} sm={6} lg={4} md={6}>
        <Box p={4} bgcolor="white" borderRadius={14}>
          <Typography variant="h4" className={classes.itemCenter}>
            Sign in
          </Typography>
          <form onSubmit={submit}>
            <Typography variant="subtitle2" gutterBottom>
              EMAIL
            </Typography>
            <TextField
              variant="outlined"
              className={classes.loginInputLabel}
              fullWidth
              value={email}
              onChange={setEmail}
            />
            <Typography variant="subtitle2" gutterBottom>
              PASSWORD
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              className={classes.loginInputLabel}
              fullWidth
              value={password}
              onChange={setPassword}
            />
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.loginBtn}
              >
                Login
              </Button>
              <Link
                href="/register"
                className={[classes.itemCenter, classes.testTransform]}
                color="primary"
              >
                Create an account
              </Link>
            </Box>
          </form>
        </Box>
        <Notify message={message} severity={severity} open={open} />
      </Grid>
    </Grid>
  );
};

export default Login;
