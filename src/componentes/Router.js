import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vista1 from "../vistas/Vista1";
import Vista2 from "../vistas/Vista2";
import Escalera from "../vistas/Vista3";
import Home from "../vistas/Home";
import PruebaComentarios from "../vistas/PruebaComentarios";
import Vista4 from "../vistas/Vista4";
import Vista5 from "../vistas/Vista5";
import Vista6 from "../vistas/Vista6";
import Vista7 from "../vistas/Vista7";
import Vista8 from "../vistas/Vista8";
import Vista9 from "../vistas/Vista9";
import Vista10 from "../vistas/Vista10";
import Vista11 from "../vistas/Vista11";
import Vista12 from "../vistas/Vista12";
import Vista13 from "../vistas/Vista13";
import Vista14 from "../vistas/Vista14";
import Vista15 from "../vistas/Vista15";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/consuelo">
            <Vista1 />
          </Route>

          <Route path="/sombra">
            <Vista2 />
          </Route>

          <Route path="/miradas">
            <Escalera />
          </Route>

          <Route path="/calido">
            <Vista4 />
          </Route>

          <Route path="/necesidad">
            <Vista5 />
          </Route>

          <Route path="/condena">
            <Vista6 />
          </Route>

          <Route path="/retazos">
            <Vista7 />
          </Route>

          <Route path="/compartir">
            <Vista8 />
          </Route>

          <Route path="/poesia">
            <Vista9 />
          </Route>

          <Route path="/respirar">
            <Vista10 />
          </Route>

          <Route path="/herida">
            <Vista11 />
          </Route>

          <Route path="/pesadilla">
            <Vista12 />
          </Route>

          <Route path="/telarana">
            <Vista13 />
          </Route>

          <Route path="/introspectivo">
            <Vista14 />
          </Route>

          <Route path="/liberar">
            <Vista15 />
          </Route>

          <Route path="/prueba">
            <PruebaComentarios />
          </Route>

          <Route path="/">
            <Home />
          </Route>

     
        </Switch>
      </div>
    </Router>
  );
}
