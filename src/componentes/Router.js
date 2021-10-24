import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vista1 from "../vistas/Vista1";
import Vista2 from "../vistas/Vista2";
import Escalera from "../vistas/Vista3";
import Home from "../vistas/Home";
import PruebaComentarios from "../vistas/PruebaComentarios";
import Vista4 from "../vistas/Vista4";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <Vista1 />
          </Route>

          <Route path="/users">
            <Vista2 />
          </Route>

          <Route path="/vista3">
            <Escalera />
          </Route>

          <Route path="/vista4">
            <Vista4 />
          </Route>

          <Route path="/prueba">
            <PruebaComentarios />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
