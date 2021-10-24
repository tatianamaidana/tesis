import React from "react";
import { Link } from "react-router-dom";
import Comentario from "../componentes/Comentario";
import DataProcessor from "../service/DataProcessor";
import { DataProvider } from "../service/DataProvider";

function PruebaComentarios() {

  return (
    <div class= "molino" style={{backgroundImage: "url('/assets/imagen/fondo4.jpg')"}}>
     
     <DataProvider endpoint="comments" >
         <DataProcessor  />
         <Comentario />
     </DataProvider>

    </div>
  );
}

export default PruebaComentarios;
