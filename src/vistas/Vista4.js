import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import BotonCreditos from "../componentes/BotonCreditos";
import { DataProvider } from "../service/DataProvider";

function Vista4({openCreditos}) {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <div className="col-i">
        <Link to="necesidad">
          <img
            className="libro2"
            widht={700}
            height={500}
            src="/assets/imagen/cafe.png"
            alt="imagen"
          />
        </Link>

        <img
          className="poesia3"
          src="/assets/imagen/poesia4.png"
          alt="imagen"
        />
        <Link to="compartir">
          <img
            className="pileta"
            widht={700}
            height={500}
            src="/assets/imagen/rostro.jpg"
            alt="imagen"
          />
        </Link>

        <video className="libros" autoPlay muted loop width={600} height={400}>
          <source src="/assets/video/Pájaros en el río.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="col-d">
        <DataProvider endpoint={`random-comments-by-path/${path}`}>
          <DataProcessor />
          <Comentario numero={0} />

          <video autoPlay loop width={900} height={700} id="video-vista4">
            <source src="/assets/video/Escena 4.mp4" type="video/mp4" />
          </video>

          <Link to="introspectivo">
            <img
              className="texto3a"
              widht={413}
              height={403}
              src="/assets/imagen/texto1-07.png"
              alt="imagen"
            />
          </Link>

          <Comentario numero={1} />

          <BotonCreditos abrirPopup={openCreditos} />
        </DataProvider>
      </div>
    </div>
  );
}

export default Vista4;
