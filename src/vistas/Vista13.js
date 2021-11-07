import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista13() {
    let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo12.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={900} height={700}>
          <source src="/assets/video/Escena 13.mp4" type="video/mp4" />
        </video>

        <img
            alt="imagen"
            className="poesia3"
            
            src="/assets/imagen/poesia13.png"

            
          />

<Link to="necesidad">
          <img
            alt="imagen"
            className="atardecer"
            width={650} height={450}
            src="/assets/imagen/flores3.jpg"
          />
        </Link>

        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>
      </div>

      <div className="col-d">
        <Link to="introspectivo">
          <img
            alt="imagen"
            className="atardecer"
            
            src="/assets/imagen/escalera1.png"
          />
        </Link>

        <video autoPlay loop muted width={550} height={350}>
          <source src="/assets/video/molino10.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Vista13;
