import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista8() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="molino"
      style={{ backgroundImage: "url('/assets/imagen/fondo20.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 8.mp4" type="video/mp4" />
        </video>

        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/texto8.png"
        />

        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>
      </div>

      <div className="col-d">
        <Link to="poesia">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/libros2.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default Vista8;
