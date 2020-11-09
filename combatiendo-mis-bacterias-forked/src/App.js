import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import Layout from "./Layout";
//import Layout1 from "./Layout1";
import Register from "./components/Register";
import Iniciar from "./components/Iniciar";
import Noticias from "./pages/Noticias";
import Historia from "./pages/Historia";
import Main1 from "./components/Main1";
import Navbar2 from "./components/Navbar2";
import Principal from "./pages/Principal";
import Clasificacion from "./pages/Clasificacion";
import Juego from "./pages/Juego";
import Peligrosas from "./pages/Peligrosas";
import Intermedio from "./pages/Intermedio";
import Comunes from "./pages/Comunes";
import Raras from "./pages/Raras";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Iniciar" component={Iniciar} />
        <Route exact path="/Main1" component={Main1} />
        <Route exact path="/Navbar2" component={Navbar2} />
        <Route exact path="/Navbar" component={Navbar} />
        <Layout>
          <Route exact path="/Historia" component={Historia} />
          <Route exact path="/Noticias" component={Noticias} />
          <Route exact path="/Principal" component={Principal} />
          <Route exact path="/Clasificacion" component={Clasificacion} />
          <Route exact path="/Juego" component={Juego} />
          <Route exact path="/Peligrosas" component={Peligrosas} />
          <Route exact path="/Intermedio" component={Intermedio} />
          <Route exact path="/Comunes" component={Comunes} />
          <Route exact path="/Raras" component={Raras} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
