import React from "react";
import { Link } from "react-router-dom";

function Vista15() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo5.jpg')" }}
    >
      <div className="col-i">
        <Link to="consuelo">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/atardecer1.png"
          />
        </Link>
      </div>

      <div className="col-d">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 15.mp4" type="video/mp4" />
        </video>

        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/texto15.png"
        />
      </div>
    </div>
  );
}

export default Vista15;
