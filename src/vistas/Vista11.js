import React from "react";
import { Link } from "react-router-dom";

function Vista11() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo13.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 11.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">
        <Link to="pesadilla">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/atardecer1.png"
          />
        </Link>

        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Extra luna noche campo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Vista11;
