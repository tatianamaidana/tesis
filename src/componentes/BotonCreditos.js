import React from "react";

export default function BotonCreditos({ abrirPopup }) {
  return (
    <div className="boton-creditos">
      <button onClick={abrirPopup}>
        <img src="/assets/imagen/flor credito.png"></img>
      </button>
    </div>
  );
}
