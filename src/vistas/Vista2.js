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

          
        <Link to="miradas">
          <img
            alt="imagen"
            className="vacas2"
            widht={600}
            height={400}
            src="/assets/imagen/vacas2.png"
          />
        </Link>

          <Comentario numero={1} />
        </DataProvider>


        <img
            alt="imagen"
            className="texto3"
            widht={329}
            height={335}
            src="/assets/imagen/texto3.png"
          />

        <video autoPlay muted loop width={600} height={400}>
          <source src="/assets/video/Extra atardecer campo.mp4" type="video/mp4" />
        </video>

     
      </div>

      <div className="col-d">
      <video className="espejito" autoPlay controls width={800} height={700}>
          <source src="/assets/video/Escena 2.mp4" type="video/mp4" />
        </video>

        <img
            alt="imagen"
            className="poesia2"
            src="/assets/imagen/poesia2.png"
          />
<Link to="liberar">
        <img
            alt="imagen"
            className="texto3a"
            widht={364}
            height={458}
            src="/assets/imagen/texto3a.png"
          />
          </Link>

      </div>
    </div>
  );
}

export default Vista2;
