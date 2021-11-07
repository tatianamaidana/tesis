import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista14() {
    let path = window.location.pathname;
    path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo23.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={900} height={700}>
          <source src="/assets/video/Escena 14.mp4" type="video/mp4" />
        </video>
        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />

          <img
            alt="imagen"
            className="poesia3"
            
            src="/assets/imagen/poesia14.png"
          /> 
          <Comentario numero={1} />
        </DataProvider>

        <Link to="respirar">
          <img
            alt="imagen"
            className="atardecer"
            
            src="/assets/imagen/caminocasa.jpg"
          />
        </Link>

        
      </div>

      <div className="col-d">
        <Link to="liberar">
          <img
            alt="imagen"
            className="atardecer"
            width={500} height={400}
            src="/assets/imagen/atardecer1.png"
          />
        </Link>

        <img
            alt="imagen"
            className="atardecer"
            
            src="/assets/imagen/poesia14a.png"
          /> 

        <video autoPlay muted loop width={600} height={500}>
          <source src="/assets/video/extra pajaros.mp4" type="video/mp4" />
        </video>
      </div>
      
    </div>
  );
}

export default Vista14;
