import React from "react";
import { Link } from "react-router-dom";

function vista12() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo6.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={600} height={500}>
          <source
            src="/assets/video/vhs molino.mp4"
            type="video/mp4"
          />
        </video>

        <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/texto12.png"
          />
      </div>

      <div className="col-d">
        <Link to="telarana">
          <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/atardecer1.png"
          />
        </Link>

        <video autoPlay loop width={600} height={500}>
          <source
            src="/assets/video/nieve.mp4"
            type="video/mp4"
          />
        </video>
        <img
            alt="imagen"
            className="atardecer"
            src="/assets/imagen/texto12a.png"
          />
      </div>
    </div>
  );
}

export default vista12;
