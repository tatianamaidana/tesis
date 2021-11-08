import React from "react";

export default function Intro({ visible }) {
  return visible ? (
    <div className="portada slide-out-bck-center">
      <img
        src="/assets/imagen/Portada.png"
        alt="Yo no quise ser estos fragmentos"
      />
    </div>
  ) : null;
}
