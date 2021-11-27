import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import BotonCreditos from "../componentes/BotonCreditos";
import { DataProvider } from "../service/DataProvider";

function Vista12({ openCreditos }) {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/Fondo6.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}`}>
        <DataProcessor />
        <div className="col-i">
          <video autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 12.mp4" type="video/mp4" />
          </video>

          <img
            alt="imagen"
            className="texto12"
            src="/assets/imagen/texto12.png"
          />

          <Comentario numero={0} />
          <Link to="condena">
            <img
              alt="imagen"
              className="atardecer"
              src="/assets/imagen/llamada.png"
            />
          </Link>
        </div>

        <div className="col-d">
          <Comentario numero={1} />

          <Link to="telarana">
            <img
              alt="imagen"
              className="atardecer"
              src="/assets/imagen/telarana.jpg"
            />
          </Link>

          <Link to="consuelo">
            <img
              alt="imagen"
              className="texto3a"
              src="/assets/imagen/poesia12.png"
            />
          </Link>

          <Comentario numero={2} />

          <video autoPlay loop muted width={600} height={500}>
            <source src="/assets/video/vhs molino.mp4" type="video/mp4" />
          </video>

          <Comentario numero={3} />

          <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/texto12a.png"
          />

          <BotonCreditos  abrirPopup={openCreditos} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista12;
