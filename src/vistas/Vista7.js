import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista7() {
  let path = window.location.pathname;
  path = path.replace("/", "");
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo9.jpg')" }}
    >
      <div className="col-i">
        <img
          alt="imagen"
          className="poesia7"
          src="/assets/imagen/poesia7-.png"
        />

        <Link to="compartir">
          <img
            alt="imagen"
            className="atardecer"
            width={750} height={500}

            src="/assets/imagen/terraza.jpg"
          />
        </Link>

        <video autoPlay loop muted width={800} height={600}>
          <source src="/assets/video/Extra gato arbol.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">

      <video className= "roto" autoPlay loop width={900} height={700}>
          <source src="/assets/video/Escena 7.mp4" type="video/mp4" />
        </video>


        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />

          <Link to="introspectivo">
          <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/texto7.png"
        /> 
        </Link>
          <Comentario numero={1} />
        </DataProvider>


      
      </div>
    </div>
  );
}

export default Vista7;
