import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista12() {
    let path = window.location.pathname;
    path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo6.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={900} height={700}>
          <source
            src="/assets/video/Escena 12.mp4"
            type="video/mp4"
          />
        </video>

        <img
            alt="imagen"
            className="poesia3"
            src="/assets/imagen/texto12.png"
          />
 <Link to="condena">
          <img
            alt="imagen"
            className="atardecer"
           
            src="/assets/imagen/llamada.png"
          />
        </Link>

      </div>

      <div className="col-d">

      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
        
        <Link to="telarana">
          <img
            alt="imagen"
            className="atardecer"
           
            src="/assets/imagen/telarana.jpg"
          />
        </Link>


        <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/poesia12.png"
          />

        <Comentario numero={1} />
       

        <video autoPlay loop muted width={600} height={500}>
          <source
            src="/assets/video/vhs molino.mp4"
            type="video/mp4"
          />
        </video>

        <Comentario numero={2} />
        </DataProvider> 
        <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/texto12a.png"
          />
      </div>
    </div>
  );
}

export default Vista12;
