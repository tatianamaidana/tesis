import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista10() {
    let path = window.location.pathname;
  path = path.replace("/", "");
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo7.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 10.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">
        <Link to="herida">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/atardecer1.png"
          />
        </Link>
        
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>

        <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/texto10.png"
          />
      </div>
    </div>
  );
}

export default Vista10;
