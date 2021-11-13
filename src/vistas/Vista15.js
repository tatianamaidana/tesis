import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista15() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo5.jpg')" }}
    >

<DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
      <div className="col-i">
        <Link to="consuelo">
          <img
            alt="imagen"
            className="atardecer"
           
            src="/assets/imagen/fumando1.png"
          />
        </Link>
        <Comentario numero={0} />

        <img
            alt="imagen"
            className="poesia15"
            src="/assets/imagen/poesia15.png"
          />

<video className = "secuencia" autoPlay loop muted width={650} height={350}>
          <source src="/assets/video/Secuencia 04.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">
        <video autoPlay loop width={900} height={700}>
          <source src="/assets/video/Escena 15.mp4" type="video/mp4" />
        </video>
       
          
          <Comentario numero={1} />
        

        <Link to="poesia">
        <img
        className= "texto15"
          alt="imagen"
          className="texto15"
          src="/assets/imagen/texto15.png"
        />
        </Link>

        <Comentario numero={2} />
      </div>
      </DataProvider>
      
    </div>
  );
}

export default Vista15;
