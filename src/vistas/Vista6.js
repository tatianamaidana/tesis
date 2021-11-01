import React from "react";
import { Link } from "react-router-dom";

function vista6() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo10.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 6.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">
        <Link to="retazos">
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

export default vista6;
