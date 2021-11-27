import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import BotonCreditos from "../componentes/BotonCreditos";
import { DataProvider } from "../service/DataProvider";

function Vista9({ openCreditos }) {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo8.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}`}>
        <DataProcessor />
        <div className="col-i">
          <video autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 9.mp4" type="video/mp4" />
          </video>

          <Comentario numero={0} />
          <Comentario numero={1} />

          <Link to="/sombra">
            <img
              alt="imagen"
              className="atardecer"
              width={600}
              height={350}
              src="/assets/imagen/inicio.jpg"
            />
          </Link>
        </div>

        <div className="col-d">
          <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/poesia9.png"
          />
          <Link to="/respirar">
            <img
              alt="imagen"
              className="libros3"
              src="/assets/imagen/libros3.png"
            />
          </Link>

          <Comentario numero={2} />

          <video
            className="vhsvacas"
            autoPlay
            loop
            muted
            width={650}
            height={450}
          >
            <source src="/assets/video/nieve.mp4" type="video/mp4" />
          </video>

          <BotonCreditos  abrirPopup={openCreditos} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista9;
