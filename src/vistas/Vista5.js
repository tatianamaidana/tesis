import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista5() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/Fondo25.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />

      <div className="col-i">
        <video autoPlay loop width={800} height={600}>
          <source src="/assets/video/Escena 5.mp4" type="video/mp4" />
        </video>

        <Link to="condena">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/flores2.png"
          />
        </Link>

        <Comentario numero={0} />


        <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/texto5.png"
          />

<Link to="telarana">
          <img
            alt="imagen"
            className="atardecer"
            width={600} height={400}
            src="/assets/imagen/telarana1.jpg"
          />
        </Link>
      </div>

      <div className="col-d">
  
          <Comentario numero={1} />
          <Link to="pesadilla">
          <img
            alt="imagen"
            className="texto3a"
            src="/assets/imagen/poesia5.png"
          />
           </Link>
          <Comentario numero={2} />

          <video className="libros" autoPlay muted loop width={600} height={400}>
          <source src="/assets/video/libros.mp4" type="video/mp4" />
        </video>
         
          <Comentario numero={3} />
        
      </div>

      </DataProvider>
    </div>
  );
}

export default Vista5;
