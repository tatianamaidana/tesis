import React, { useState } from "react";
import Comentario from "../componentes/Comentario";
import PopUpInicio from "../componentes/PopUpInicio";
import EscribirComentario from "../componentes/EscribirComentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function PruebaComentarios() {
  let path = window.location.pathname;
  path = path.replace("/", "");

  const [nombre] = useState(localStorage.getItem("tesis-tati-nombre"));
  const [emocion1] = useState(localStorage.getItem("tesis-tati-emocion-1"));
  const [emocion2] = useState(localStorage.getItem("tesis-tati-emocion-2"));

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

      <PopUpInicio />

      <h1>{nombre}</h1>
      <h1>{emocion1}</h1>
      <h1>{emocion2}</h1>
    </div>
  );
}

export default PruebaComentarios;
