import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function Vista6() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo10.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={800} height={600}>
          <source src="/assets/video/Escena 6.mp4" type="video/mp4" />
        </video>

        <DataProvider endpoint={`random-comments-by-path/${path}/`}>
          <DataProcessor />
          <Comentario numero={0} />
          <Comentario numero={1} />
        </DataProvider>
      </div>

      <div className="col-d">
        <Link to="retazos">
          <img
            alt="imagen"
            className="atardecer"
            width={600}
            height={400}
            src="/assets/imagen/vidrio1.JPG"
          />
        </Link>

        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Extra gato campo 2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Vista6;
