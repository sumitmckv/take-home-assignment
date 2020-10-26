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
import registerStyle from "./styles";

const Register = () => {
  const classes = registerStyle();
  return (
    <Box className={[classes.cardContainer, classes.itemCenter]}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4" className={classes.itemCenter}>
            Sign up
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
