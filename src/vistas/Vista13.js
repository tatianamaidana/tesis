import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista13() {
    let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo12.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 13.mp4" type="video/mp4" />
        </video>

        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>
      </div>

      <div className="col-d">
        <Link to="introspectivo">
          <img
            alt="imagen"
            className="atardecer"
            width={700} height={500}
            src="/assets/imagen/escalera1.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default Vista13;
