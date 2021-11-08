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
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />

        <div className="col-i">
          <video autoPlay loop width={900} height={700}>
            <source src="/assets/video/Escena 13.mp4" type="video/mp4" />
          </video>

          <div className="row">
            
            <Link to="necesidad">
              <img
                alt="imagen"
                className="atardecer"
                width={650}
                height={450}
                src="/assets/imagen/flores3.jpg"
              />
            </Link>

            <img
              alt="imagen"
              className="poesia13"
              src="/assets/imagen/poesia13.png"
            />

          </div>
          <Comentario numero={0} />
        </div>

        <div className="col-d">
          <Comentario numero={1} />
          <Link to="introspectivo">
            <img
              alt="imagen"
              className="escalera1"
              src="/assets/imagen/escalera1.png"
            />
          </Link>

          <video autoPlay loop muted width={750} height={450}>
            <source src="/assets/video/molino10.mp4" type="video/mp4" />
          </video>

          <Comentario numero={2} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista13;
