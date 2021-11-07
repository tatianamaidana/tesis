import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista1() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo4.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />
        <div className="col-i">
          <video autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 1.mp4" type="video/mp4" />
          </video>

          <img
            className="texto1"
            widht={453}
            height={504}
            src="/assets/imagen/texto1.png"
            alt="imagen"
          />
          <Comentario numero={0} />
          <video className="cielo" autoPlay loop muted width={700} height={500}>
            <source src="/assets/video/cielo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="col-d">
          <img
            className="poesia1"
            src="/assets/imagen/poesia1.png"
            alt="imagen"
          />

          <Link to="sombra">
            <img
              alt="imagen"
              className="despertando"
              src="/assets/imagen/despertando.png"
            />
          </Link>

          <Comentario numero={1} />

          <Link to="calido">
            <img
              alt="imagen"
              className="libro"
              widht={600}
              height={400}
              src="/assets/imagen/cocina.jpg"
            />
          </Link>

          <Comentario numero={2} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista1;
