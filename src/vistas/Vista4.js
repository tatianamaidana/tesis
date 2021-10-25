import React from "react";
import { Link } from "react-router-dom";

function vista4() {
  return (
    <div
      className="espejo fondo-vista" 
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <div className="col-i">

      <img
          className="libro2"
          widht={500}
          height={300}
          src="/assets/imagen/libros2.png"
          alt="imagen"
      />

        <img
          className="texto1-07"
          widht={413}
          height={403}
          src="/assets/imagen/texto1-07.png"
          alt="imagen"
        />

        <img
          className="pileta"
          widht={500}
          height={300}
          src="/assets/imagen/pileta.JPG"
          alt="imagen"
        />
        
      </div>
      <div className="col-d">



      <img
          className="papel 1"
          widht={500}
          height={300}
          src="/assets/imagen/papel 1.png"
          alt="imagen"
        />

        <video autoPlay controls width={800} height={600} id="video-vista4">
          <source src="/assets/video/espejo.mp4" type="video/mp4" />
        </video>

        <img
          className="papel 2"
          widht={500}
          height={300}
          src="/assets/imagen/papel 2.png"
          alt="imagen"
        />
      </div>
    </div>
  );
}

export default vista4;
