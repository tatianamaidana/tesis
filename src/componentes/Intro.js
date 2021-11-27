import React, { useEffect, useState } from "react";

export default function Intro({ visible }) {
  const [visibleThis, setVisibleThis] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibleThis(true);
    }, 14500);
  });

  return visible ? (
    <div
      className={
        visibleThis
          ? "portada slide-out-bck-center"
          : "portada slide-in-fwd-center"
      }
    >
      {/* <img
        src="/assets/imagen/Portada.png"
        alt="Yo no quise ser estos fragmentos"
      /> */}
      <video autoPlay loop width="100%" height="100%">
        <source src="/assets/video/portada.mp4" type="video/mp4" />
      </video>
    </div>
  ) : null;
}
