import React from "react";
import { GlobalStyle } from "src/styles/global-styles";
import { ThemeProvider } from "styled-components";

// css style configs
import theme from "src/styles/theme";
import "src/styles/fonts.css"; // import config font define
import "sweetalert2/dist/sweetalert2.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// diff import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { selectAppStore } from "./store/selecters";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import Loading from "src/components/Loading";

import { useSelector } from "react-redux";

import NotFoundPage from "src/components/NotFoundPage";
import Layout from "../Layout";
import Home from "../Home";
import Signup from "../Signup";
import Login from "../Login";

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 10,
  },
  col: {
    padding: 15, // default 15
  },
  container: {
    padding: 0,
    maxWidth: {
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

function App() {
  const { loading } = useSelector(selectAppStore);

  return (
    <GridThemeProvider gridTheme={gridTheme}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/signup">
                <Signup />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>

              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Router>
        </Layout>
        {/* // extra config global */}
        <Loading active={loading} />
        <GlobalStyle />
        <BaseCSS />
      </ThemeProvider>
    </GridThemeProvider>
  );
}

export default App;
