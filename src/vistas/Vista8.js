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
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo20.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={900} height={700}>
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

          <Link to="consuelo">
          <img
            alt="imagen"
            className="atardecer"
            
            src="/assets/imagen/caminando.png"
          />
        </Link>
          <Comentario numero={1} />
        </DataProvider>
      </div>

      <div className="col-d">
      <img
          alt="imagen"
          className="texto3a"
          src="/assets/imagen/poesia8.png"
        />

        <Link to="poesia">
          <img
            alt="imagen"
            className="atardecer"
            width={700} height={500}
            src="/assets/imagen/libros2.png"
          />
        </Link>

        <video className= "gato1" autoPlay loop muted width={550} height={350}>
          <source src="/assets/video/Botella.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Vista8;
