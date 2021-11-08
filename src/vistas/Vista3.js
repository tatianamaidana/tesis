import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista3() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo21.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />
        <div className="col-i">
          <video autoPlay loop width={800} height={600}>
            <source src="/assets/video/Escena 3.mp4" type="video/mp4" />
          </video>

          <div className="row row-vista-3">
            <Link to="pesadilla">
              <img
                alt="imagen"
                className="ella"
                widht={700}
                height={500}
                src="/assets/imagen/persona mar.png"
              />
            </Link>

            <img
              alt="imagen"
              className="poesia3"
              src="/assets/imagen/poesia3.png"
              style={{zIndex: 3}}
            />
          </div>
        </div>

        <div className="col-d">
          <Link to="calido">
            <img
              alt="artemis"
              className="ella"
              widht={700}
              height={500}
              src="/assets/imagen/artemis1.png"
            />
          </Link>

          <Comentario numero={1} />

          <video
            className="vhsvacas"
            autoPlay
            muted
            loop
            width={600}
            height={400}
          >
            <source src="/assets/video/vhs vacas.mp4" type="video/mp4" />
          </video>

          <Comentario numero={2} />
        </div>
      </DataProvider>
    </div>
  );
}

export default Vista3;
