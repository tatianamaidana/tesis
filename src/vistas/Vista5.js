import React from "react";
import { Link } from "react-router-dom";

function Vista5() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo14.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={800} height={600}>
          <source src="/assets/video/Escena 5.mp4" type="video/mp4" />
        </video>

        <Link to="condena">
          <img
            alt="imagen"
            className="atardecer"
            width={700} height={500}
            src="/assets/imagen/llamada.jpg"
          />
        </Link>
      </div>

      <div className="col-d">
        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/texto5.png"
        />

      </div>
    </div>
  );
}

export default Vista5;
