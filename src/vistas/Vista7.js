import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista7() {
  let path = window.location.pathname;
  path = path.replace("/", "");
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo9.jpg')" }}
    >
      <div className="col-i">
        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/texto7.png"
        />
      </div>

      <div className="col-d">
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>


        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 7.mp4" type="video/mp4" />
        </video>

        <Link to="compartir">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/terraza.jpg"
          />
        </Link>
      </div>
    </div>
  );
}

export default Vista7;
