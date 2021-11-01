import React from "react";
import { Link } from "react-router-dom";

function vista5() {
  return (
    <div
      className="molino"
      style={{ backgroundImage: "url('/assets/imagen/fondo11.jpg')" }}
    >
      <video autoPlay loop width={600} height={500}>
        <source src="/assets/video/Escena 5.mp4" type="video/mp4" />
      </video>

      <Link to="condena">
        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/atardecer1.png"
        />
      </Link>
    </div>
  );
}

export default vista5;