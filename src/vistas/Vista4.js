import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista4() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="espejo fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <div className="col-i">
        <Link to="necesidad">
          <img
            className="libro2"
            widht={500}
            height={300}
            src="/assets/imagen/libros2.png"
            alt="imagen"
          />
        </Link>

        <img
          className="texto4"
          widht={413}
          height={403}
          src="/assets/imagen/texto4.png"
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
            <source src="/assets/video/Escena 4.mp4" type="video/mp4" />
          </video>

          <Comentario numero={1} />
        </DataProvider>
      </div>
    </div>
  );
}

export default Vista4;
