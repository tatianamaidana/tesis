import React from "react";
import { Link } from "react-router-dom";

function vista4() {
  return (
    <div
      class="espejo fondo-vista" 
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <div class="col-i">

      <img
          class="libro2"
          widht={500}
          height={300}
          src="/assets/imagen/libros2.png"
        />

        <img
          class="texto1-07"
          widht={413}
          height={403}
          src="/assets/imagen/texto1-07.png"
        />

        <img
          class="pileta"
          widht={500}
          height={300}
          src="/assets/imagen/pileta.JPG"
        />
        
      </div>
      <div class="col-d">



      <img
          class="papel 1"
          widht={500}
          height={300}
          src="/assets/imagen/papel 1.png"
        />

        <video autoPlay controls width={800} height={600} id="video-vista4">
          <source src="/assets/video/espejo.mp4" type="video/mp4" />
        </video>

        <img
          class="papel 2"
          widht={500}
          height={300}
          src="/assets/imagen/papel 2.png"
        />
      </div>
    </div>
  );
}

export default vista4;
