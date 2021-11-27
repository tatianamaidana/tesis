import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vista1 from "../vistas/Vista1";
import Vista2 from "../vistas/Vista2";
import Vista3 from "../vistas/Vista3";
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
import EscribirComentario from "./EscribirComentario";
import Creditos from "./Creditos";
import BotonComentar from "./BotonComentar";

export default function App() {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [creditosVisible, setCreditosVisible] = useState(false);

  const closeComments = () => {
    setCommentsVisible(false);
  };

  const openComments = () => {
    setCommentsVisible(true);
  };

  const openCreditos = () => {
    setCreditosVisible(true);
  };

  const closeCreditos = () => {
    setCreditosVisible(false);
  };

  return (
    <Router>
      <div className="router">
        <Switch>
          <Route path="/consuelo">
            <Vista1 openCreditos={openCreditos} />
          </Route>

          <Route path="/sombra">
            <Vista2 openCreditos={openCreditos} />
          </Route>

          <Route path="/miradas">
            <Vista3 openCreditos={openCreditos} />
          </Route>

          <Route path="/calido">
            <Vista4 openCreditos={openCreditos} />
          </Route>

          <Route path="/necesidad">
            <Vista5 openCreditos={openCreditos} />
          </Route>

          <Route path="/condena">
            <Vista6 openCreditos={openCreditos} />
          </Route>

          <Route path="/retazos">
            <Vista7 openCreditos={openCreditos} />
          </Route>

          <Route path="/compartir">
            <Vista8 openCreditos={openCreditos} />
          </Route>

          <Route path="/poesia">
            <Vista9 openCreditos={openCreditos} />
          </Route>

          <Route path="/respirar">
            <Vista10 openCreditos={openCreditos} />
          </Route>

          <Route path="/herida">
            <Vista11 openCreditos={openCreditos} />
          </Route>

          <Route path="/pesadilla">
            <Vista12 openCreditos={openCreditos} />
          </Route>

          <Route path="/telarana">
            <Vista13 openCreditos={openCreditos} />
          </Route>

          <Route path="/introspectivo">
            <Vista14 openCreditos={openCreditos} />
          </Route>

          <Route path="/liberar">
            <Vista15 openCreditos={openCreditos} />
          </Route>

          <Route path="/prueba">
            <PruebaComentarios />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/fragmentos">
            <Home />
          </Route>
        </Switch>
        <BotonComentar abrirPopup={openComments} />
        <EscribirComentario visible={commentsVisible} close={closeComments} />
        <Creditos visible={creditosVisible} close={closeCreditos} />
      </div>
    </Router>
  );
}
