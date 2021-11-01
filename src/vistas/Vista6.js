import React from "react";
import { Link } from "react-router-dom";

function vista6() {
  return (
    <div
      className="fondo-vista"
      style={{ backgroundImage: "url('/assets/imagen/fondo10.jpg')" }}
    >
      <div className="col-i">
        <video autoPlay loop width={800} height={600}>
          <source src="/assets/video/Escena 6.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="col-d">
        <Link to="retazos">
          <img
            alt="imagen"
            className="atardecer"
            width={600} height={400}
            src="/assets/imagen/vidrio1.JPG"
          />
        </Link>
        
        <video autoPlay loop width={600} height={500}>
          <source src="/assets/video/Extra gato campo 2.mp4" type="video/mp4" />
        </video>


      </div>
    </div>
  );
}

export default vista6;
