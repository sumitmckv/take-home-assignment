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
import loginStyle from "./styles";

const Login = () => {
  const classes = loginStyle();
  return (
    <Box className={[classes.cardContainer, classes.itemCenter]}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4" className={classes.itemCenter}>
            Sign in
          </Typography>
          <form>
            <Typography variant="subtitle2" gutterBottom>
              EMAIL
            </Typography>
            <TextField
              variant="outlined"
              className={classes.loginInputLabel}
              fullWidth
            />
            <Typography variant="subtitle2" gutterBottom>
              PASSWORD
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              className={classes.loginInputLabel}
              fullWidth
            />
            <Box mt={2}>
              <Button
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
