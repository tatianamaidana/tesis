import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista6() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/Fondo26.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />

        <div className="col-i">
          <video autoPlay loop width={800} height={600}>
            <source src="/assets/video/Escena 6.mp4" type="video/mp4" />
          </video>

          <Comentario numero={0} />

          <Link to="herida">
            <img
              alt="imagen"
              className="atardecer"
              src="/assets/imagen/pesadilla.jpg"
            />
          </Link>

          <Comentario numero={1} />
        </div>

        <div className="col-d">
          <Link to="retazos">
            <img
              alt="imagen"
              className="atardecer"
              src="/assets/imagen/vidrio2.png"
            />
          </Link>

          <Link to="sombra">
          <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/poesia6.png"
          />
          </Link>

          <Comentario numero={2} />
          <video className="gato1" autoPlay loop width={600} height={500}>
            <source
              src="/assets/video/Extra gato campo 2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista6;
