import React from "react";
import { Link } from "react-router-dom";

function vista9() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo8.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 9.mp4" type="video/mp4" />
        </video>

        <Link to="respirar">
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

export default vista9;
