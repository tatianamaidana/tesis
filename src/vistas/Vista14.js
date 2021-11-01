import React from "react";
import { Link } from "react-router-dom";

function Vista14() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo16.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 14.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">
        <Link to="liberar">
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

export default Vista14;
