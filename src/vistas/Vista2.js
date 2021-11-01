import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista2() {

  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo2.jpg')" }}
    >
      <div className="col-i">

      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>

        <Link to="miradas">
          <img
            alt="imagen"
            className="despertando"
            widht={450}
            height={200}
            src="/assets/imagen/flores.jpg"
          />
        </Link>

        <img
            alt="imagen"
            className="despertando"
            widht={329}
            height={335}
            src="/assets/imagen/texto3.png"
          />

        <video autoPlay muted loop width={500} height={300}>
          <source src="/assets/video/nieve.mp4" type="video/mp4" />
        </video>

     
      </div>

      <div className="col-d">
      <video className="espejito" autoPlay controls width={800} height={700}>
          <source src="/assets/video/Escena 2.mp4" type="video/mp4" />
        </video>

        <img
            alt="imagen"
            className="despertando"
            widht={364}
            height={458}
            src="/assets/imagen/texto3a.png"
          />

      </div>
    </div>
  );
}

export default Vista2;
