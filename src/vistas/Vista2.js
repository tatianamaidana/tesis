import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import BotonCreditos from "../componentes/BotonCreditos";
import { DataProvider } from "../service/DataProvider";

function Vista2({ openCreditos }) {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo2.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />

        <div className="col-i">
          <Comentario numero={0} />

          <Link to="miradas">
            <img
              alt="imagen"
              className="vacas2"
              widht={550}
              height={350}
              src="/assets/imagen/vacas2.png"
            />
          </Link>

          <Comentario numero={1} />

          <img
            alt="imagen"
            className="texto3"
            widht={329}
            height={335}
            src="/assets/imagen/texto3.png"
          />

          <video
            className="extracampo"
            autoPlay
            muted
            loop
            width={600}
            height={400}
          >
            <source
              src="/assets/video/Extra atardecer campo.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="col-d">
          <video className="espejito" autoPlay loop width={800} height={700}>
            <source src="/assets/video/Escena 2.mp4" type="video/mp4" />
          </video>
          <Link style={{ zIndex: 3 }} to="poesia">
            <img
              alt="imagen"
              className="poesia2"
              src="/assets/imagen/poesia2.png"
            />
          </Link>
          <Comentario numero={2} />
          <Link to="liberar">
            <img
              alt="imagen"
              className="texto3a"
              widht={364}
              height={458}
              src="/assets/imagen/texto3a.png"
            />
          </Link>

          <BotonCreditos abrirPopup={openCreditos} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista2;
