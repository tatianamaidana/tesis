import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import BotonCreditos from "../componentes/BotonCreditos";
import { DataProvider } from "../service/DataProvider";

function Vista11({openCreditos}) {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo13.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />
        <div className="col-i">
          <Comentario numero={0} />

          <video className="escena11" autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 11.mp4" type="video/mp4" />
          </video>
          <Link style={{ zIndex: 3 }} to="retazos">
            <img
              alt="imagen"
              className="poesia11"
              src="/assets/imagen/poesia11.png"
            />
          </Link>
          <Comentario numero={1} />
        </div>

        <div className="col-d">
          <Link to="pesadilla">
            <img
              alt="imagen"
              className="vhsvacas"
              src="/assets/imagen/pesadilla.png"
            />
          </Link>

          <Comentario numero={2} />

          <video autoPlay loop width={600} height={500}>
            <source
              src="/assets/video/Extra luna noche campo.mp4"
              type="video/mp4"
            />
          </video>

          <Link to="miradas">
            <img alt="imagen" className="vaca" src="/assets/imagen/vaca.png" />
          </Link>

          <BotonCreditos  abrirPopup={openCreditos} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista11;
