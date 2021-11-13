import React, { useEffect, useState } from "react";

export default function Intro({ visible }) {

  const [visibleThis, setVisibleThis] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibleThis(true);
    }, 4500);
  });

  return visible ? (
    <div className={visibleThis ? "portada slide-out-bck-center" : "portada slide-in-fwd-center"}>
      <img
        src="/assets/imagen/Portada.png"
        alt="Yo no quise ser estos fragmentos"
      />
    </div>
  ) : null;
}
