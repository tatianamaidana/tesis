import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista5() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo14.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={800} height={600}>
          <source src="/assets/video/Escena 5.mp4" type="video/mp4" />
        </video>

        <Link to="condena">
          <img
            alt="imagen"
            className="atardecer"
            width={700}
            height={500}
            src="/assets/imagen/llamada.jpg"
          />
        </Link>
      </div>

      <div className="col-d">
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />

          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/texto5.png"
          />
          <Comentario numero={2} />
        </DataProvider>
      </div>
    </div>
  );
}

export default Vista5;
