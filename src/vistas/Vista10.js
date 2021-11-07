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
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
      <div className="col-i">


      <img
            alt="imagen"
            className="poesia3"
            
            src="/assets/imagen/poesia10.png"
          />

        <video autoPlay loop width={900} height={700}>
          <source src="/assets/video/Escena 10.mp4" type="video/mp4" />
        </video>

        

<video autoPlay loop muted width={550} height={350}>
          <source src="/assets/video/Extra arboles noche campo.mp4" type="video/mp4" />
        </video>

        <Comentario numero={0} />

        <Link to="retazos">
          <img
            alt="imagen"
            className="atardecer"
           
            src="/assets/imagen/vidrio3.JPG"
          />
        </Link>
      </div>

      <div className="col-d">
        <Link to="herida">
          <img
            alt="imagen"
            className="atardecer"
            
            src="/assets/imagen/fumando.png"
          />
        </Link>

        
          
          <Comentario numero={1} />
       

        <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/texto10.png"
          />
      </div>
      </DataProvider>
    </div>
  );
}

export default Vista10;
