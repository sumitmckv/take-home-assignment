import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#005A3C",
    },
    secondary: {
      main: "#E9F0F0",
    },
    error: {
      main: "#E1555A",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
