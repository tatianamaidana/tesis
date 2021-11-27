import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import BotonCreditos from "../componentes/BotonCreditos";
import { DataProvider } from "../service/DataProvider";

function Vista7({ openCreditos }) {
  let path = window.location.pathname;
  path = path.replace("/", "");
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo9.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}`}>
        <DataProcessor />
        <div className="col-i">
          <Link to="/miradas">
            <img
              alt="imagen"
              className="poesia7"
              src="/assets/imagen/poesia7-.png"
            />
          </Link>
          <Comentario numero={0} />
          <Link to="/compartir">
            <img
              alt="imagen"
              className="atardecer"
              width={750}
              height={500}
              src="/assets/imagen/terraza.jpg"
            />
          </Link>

          <video className="gato2" autoPlay loop muted width={800} height={600}>
            <source src="/assets/video/Extra gato arbol.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="col-d">
          <video className="roto" autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 7.mp4" type="video/mp4" />
          </video>

          <Link to="/introspectivo">
            <img
              alt="imagen"
              className="texto7"
              src="/assets/imagen/texto7.png"
            />
          </Link>
          <Comentario numero={1} />
          <Comentario numero={2} />

          <BotonCreditos  abrirPopup={openCreditos} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista7;
