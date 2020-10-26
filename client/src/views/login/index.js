import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { post } from "../../api";
import { useInput } from "../../hooks";
import loginStyle from "./styles";

const Login = () => {
  const classes = loginStyle();
  const history = useHistory();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await post("/api/login", { email, password });
      if (res.success) {
        history.push("/");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className={[classes.cardContainer, classes.itemCenter]}>
      <Card className={classes.root}>
        <CardContent>
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
