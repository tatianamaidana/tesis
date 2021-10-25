import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import EscribirComentario from "../componentes/EscribirComentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function vista4() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="espejo fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <div className="col-i">
        <img
          className="libro2"
          widht={500}
          height={300}
          src="/assets/imagen/libros2.png"
          alt="imagen"
        />

        <img
          className="texto1-07"
          widht={413}
          height={403}
          src="/assets/imagen/texto1-07.png"
          alt="imagen"
        />

        <img
          className="pileta"
          widht={500}
          height={300}
          src="/assets/imagen/pileta.JPG"
          alt="imagen"
        />
      </div>
      <div className="col-d">
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />

          <video autoPlay controls width={800} height={600} id="video-vista4">
            <source src="/assets/video/espejo.mp4" type="video/mp4" />
          </video>

          <Comentario numero={1} />
        </DataProvider>
        <EscribirComentario />
      </div>
    </div>
  );
}

export default vista4;
