import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import EscribirComentario from "../componentes/EscribirComentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function vista3() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="escalera"
      style={{ backgroundImage: "url('/assets/imagen/fondo2.jpg')" }}
    >
      <p>
        Y aún me atrevo a amar el sonido de la luz en una hora muerta, <br />
        el color del tiempo en un muro abandonado. <br />
        <Link to="/consuelo">En mi mirada lo he perdido todo.</Link>
        <br /> Es tan lejos pedir. Tan cerca saber que no hay.
      </p>

      <video autoPlay controls width={800} height={600}>
        <source src="/assets/video/escalera1.mp4" type="video/mp4" />
      </video>

      <Link to="users">
        <img
          alt="imagen"
          className="ella"
          widht={600}
          height={300}
          src="/assets/imagen/ella.JPG"
        />
      </Link>

      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />
        <Comentario numero={0} />
        <Comentario numero={1} />
        <Comentario numero={2} />
      </DataProvider>

      <EscribirComentario />

      <video className="libros" autoPlay controls width={600} height={400}>
        <source src="/assets/video/libros.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default vista3;
