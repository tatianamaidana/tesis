import React from "react";
import PopUpInicio from "../componentes/PopUpInicio";

function Home() {
  return (
    <div
      className="inicio"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <PopUpInicio />
    </div>
  );
}

export default Home;
