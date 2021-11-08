import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../service/DataProvider";

export default function Comentario({ numero = 0 }) {
  const {
    data,
    // loading,
    // loadingMore,
    // error,
    // partialCount,
    // totalCount,
    // pagina,
    // localData,
    // setLocalData,
  } = useContext(DataContext);

  const [random] = useState(Math.random() * 10);
  const [choice, setChoice] = useState();

  useEffect(() => {
    if (random < 2.5) {
      setChoice(1);
    } else if (random >= 2.5 && random < 5) {
      setChoice(2);
    } else if (random >= 5 && random < 7.5) {
      setChoice(3);
    } else if (random >= 7.5) {
      setChoice(4);
    }
  }, [random]);

  const url =  choice === 1
  ? '/assets/imagen/papel 1.png'
  : choice === 2
  ? '/assets/imagen/papel 2.png'
  : choice === 3
  ? '/assets/imagen/papel 3.png'
  : choice === 4
  ? '/assets/imagen/papel 4.png'
  : null

  return data?.length > numero ? (
    <div
      className="comentario"
      style={{
        backgroundImage: "url('" + url + "')",
      }}
    >
      <div className="contenido-comentario" style={{ maxWidth: "700px" }}>
        <p className="comentario-texto">{data[numero]?.text}</p>
        <p className="comentario-autor">{data[numero]?.user.nombre}</p>
      </div>
    </div>
  ) : null;
}
