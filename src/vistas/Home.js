import React from "react";
import PopUpInicio from "../componentes/PopUpInicio";

function Home({ enableComments }) {
  return (
    <div
      className="inicio"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <PopUpInicio visible={true} enableComments={enableComments} />
    </div>
  );
}

export default Home;
