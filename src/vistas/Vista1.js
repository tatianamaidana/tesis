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
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 1.mp4" type="video/mp4" />
        </video>

        <img
          className="texto1"
          widht={453}
          height={504}
          src="/assets/imagen/texto1.png"
          alt="imagen"
        />
      </div>

      <div className="col-d">

        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
        

        <Link to="sombra">
          <img
            alt="imagen"
            className="atardecer"
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
            src="/assets/imagen/artemis.jpg"
          />
        </Link>

        <Comentario numero={2} />
        </DataProvider>

      </div>
    </div>
  );
}

export default Vista1;
