import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista15() {
    let path = window.location.pathname;
    path = path.replace("/", "");


  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo5.jpg')" }}
    >
      <div className="col-i">
        <Link to="consuelo">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/rostro.jpg"
          />
        </Link>
      </div>

      <div className="col-d">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 15.mp4" type="video/mp4" />
        </video>
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>
        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/texto15.png"
        />
      </div>
    </div>
  );
}

export default Vista15;
