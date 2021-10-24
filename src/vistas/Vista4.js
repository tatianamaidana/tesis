import React from "react";
import { Link } from "react-router-dom";

function vista4() {
    return (
        <div class= "espejo" style={{backgroundImage: "url('/assets/imagen/fondo1.jpg')"}}>

        <img class="libro2" widht={500} height={300} src="/assets/imagen/libros2.png"/>

        <video autoPlay controls width={800} height={600}>
        <source src="/assets/video/espejo.mp4" type="video/mp4" />
      </video>

      <img class="texto1-07" widht={500} height={300} src="/assets/imagen/texto1-07.png"/>


      <img class="pileta" widht={500} height={300} src="/assets/imagen/pileta.JPG"/>



        </div>
    );
}


export default vista4;