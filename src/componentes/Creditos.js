import React from "react";

export default function Creditos({ visible, close }) {
  return visible ? (
    <div className="escribir-comentario-outer">
      <div className="escribir-comentario">
        <img
        onClick={() => {close()}}
          className="creditos-img"
          height={800}
          style={{marginTop:"100px"}}
          src="/assets/imagen/creditos.png"
          alt="imagen"
        />
      </div>
    </div>
  ) : null;
}
