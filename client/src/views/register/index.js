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
import registerStyle from "./styles";

const Register = () => {
  const classes = registerStyle();
  const history = useHistory();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await post("/api/register", { email, password });
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
