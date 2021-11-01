import React from "react";
import { Link } from "react-router-dom";

function vista7() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo9.jpg')" }} 
    >
<div className="col-i">
<img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/texto7.png"
          />


</div>
        
      <div className="col-d">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 7.mp4" type="video/mp4" />
        </video>

        <Link to="compartir">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/atardecer1.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default vista7;
