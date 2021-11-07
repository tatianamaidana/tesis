import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista11() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo13.jpg')" }}
    >
      <div className="col-i">
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />

          <video autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 11.mp4" type="video/mp4" />
          </video>

          <img
            alt="imagen"
            className="poesia3"
            src="/assets/imagen/poesia11.png"
          />

          <Comentario numero={1} />
        </DataProvider>
      </div>

      <div className="col-d">
        <Link to="pesadilla">
          <img
            alt="imagen"
            className="vhsvacas"
            src="/assets/imagen/pesadilla.png"
          />
        </Link>

        <video autoPlay loop width={600} height={500}>
          <source
            src="/assets/video/Extra luna noche campo.mp4"
            type="video/mp4"
          />
        </video>

        <Link to="miradas">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/vaca.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default Vista11;
