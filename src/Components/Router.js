import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route
          path="https://LYejin.github.io/Nomfilx/"
          exact
          component={Home}
        />
        <Route path="https://LYejin.github.io/Nomfilx/tv" component={TV} />
        <Route
          path="https://LYejin.github.io/Nomfilx/search"
          component={Search}
        />
        <Route
          path="https://LYejin.github.io/Nomfilx/movie/:id"
          component={Detail}
        />
        <Route
          path="https://LYejin.github.io/Nomfilx/show/:id"
          component={Detail}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
