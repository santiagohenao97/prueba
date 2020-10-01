import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
