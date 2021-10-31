import React from "react";
import { Link } from "react-router-dom";

function vista10() {
  return (
    <div
      className="molino"
      style={{ backgroundImage: "url('/assets/imagen/fondo7.jpg')" }}
    >
      <video autoPlay loop width={600} height={500}>
        <source src="/assets/video/secuencia 03.mp4" type="video/mp4" />
      </video>

      <Link to="/">
        <img
          alt="imagen"
          className="atardecer"
          src="/assets/imagen/atardecer1.png"
        />
      </Link>
    </div>
  );
}

export default vista10;