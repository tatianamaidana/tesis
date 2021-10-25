import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import EscribirComentario from "../componentes/EscribirComentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function PruebaComentarios() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  return (
    <div
      className="molino"
      style={{ backgroundImage: "url('/assets/imagen/fondo4.jpg')" }}
    >
      <DataProvider endpoint={`random-comments-by-path/${path}/`}>
        <DataProcessor />
        <Comentario />
        <EscribirComentario />
      </DataProvider>
    </div>
  );
}

export default PruebaComentarios;
