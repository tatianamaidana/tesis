import React from "react";
import { Link } from "react-router-dom";

function Vista1() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo4.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Escena 1.mp4" type="video/mp4" />
        </video>

        <img
          className="texto1"
          widht={453}
          height={504}
          src="/assets/imagen/texto1.png"
          alt="imagen"
        />
      </div>

      <div className="col-d">
        <Link to="sombra">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/despertando.png"
          />
        </Link>

        <Link to="calido">
          <img
            alt="imagen"
            className="libro"
            widht={600}
            height={400}
            src="/assets/imagen/artemis.jpg"
          />
        </Link>
      </div>
    </div>
  );
}

export default Vista1;
