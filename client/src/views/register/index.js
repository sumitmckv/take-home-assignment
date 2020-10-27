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
import registerStyle from "./styles";

const Register = () => {
  const classes = registerStyle();
  const history = useHistory();
  const [email, setEmail] = useInput("newuser@gmail.com");
  const [password, setPassword] = useInput("StrongPassword123");
  const [message, setMessage] = useState("Failed to register");
  const [severity, setSeverity] = useState("warning");
  const [open, setOpen] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { success, message } = await post("/api/register", {
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
            Sign up
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
                Create an account
              </Button>
              <Link
                href="/login"
                className={[classes.itemCenter, classes.testTransform]}
                color="primary"
              >
                Have an account already? Login here
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
      <Notify message={message} severity={severity} open={open} />
    </Grid>
  );
};

export default Register;
