import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="inicio"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <header>
        FRAGMENTOS DE ALEJANDRA <br />
        TESIS COLECTIVA
      </header>

      <video autoPlay controls width={900} height={800}>
        <source src="/assets/video/inicio.mp4" />
      </video>

      <Link to="consuelo">
        <img
          alt="imagen"
          className="escaleraf"
          src="/assets/imagen/escalera1.png"
        />
      </Link>

      <video autoPlay muted loop width={500} height={500}>
        <source src="/assets/video/cielo.mp4" type="video/mp4" />
      </video>

      <Link to="calido">
        <img alt="imagen" className="libro" src="/assets/imagen/libros2.png" />
      </Link>
    </div>
  );
}

export default Home;
