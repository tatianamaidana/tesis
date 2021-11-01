import React, { useState } from "react";
import { useHistory } from "react-router";

export const EMOCIONES = [
  "afecto", // 0
  "alegría", // 1
  "angustia", // 2
  "curiosidad", // 3
  "melancolía", // 4
  "miedo", // 5
  "tristeza", // 6
];

const BotonEmocion = ({ emocion, onClickExterno, seleccionados = 0 }) => {
  const [apretado, setApretado] = useState(false);

  const click = () => {
    if (seleccionados < 2 || apretado) {
      onClickExterno(emocion, !apretado);
      setApretado(!apretado);
    }
  };

  return EMOCIONES.includes(emocion) ? (
    <div className="boton-emocion">
      <button onClick={click}>
        {emocion === EMOCIONES[0] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={90}
              src="/assets/imagen/boton afecto.png"
            />
          ) : (
            <img
              alt="imagen"
              height={90}
              src="/assets/imagen/boton afecto apretado.png"
            />
          )
        ) : emocion === EMOCIONES[1] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton alegría.png"
            />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton alegria apretado.png"
            />
          )
        ) : emocion === EMOCIONES[2] ? (
          !apretado ? (
            <img alt="imagen" height={80} src="/assets/imagen/boton amor.png" />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton amor apretado.png"
            />
          )
        ) : emocion === EMOCIONES[3] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton angustia.png"
            />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton angustia apretado.png"
            />
          )
        ) : emocion === EMOCIONES[4] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton curiosidad.png"
            />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton curiosidad apretado.png"
            />
          )
        ) : emocion === EMOCIONES[5] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton melancolia.png"
            />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton melancolia apretado.png"
            />
          )
        ) : emocion === EMOCIONES[6] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton miedo.png"
            />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton miedo apretado.png"
            />
          )
        ) : emocion === EMOCIONES[7] ? (
          !apretado ? (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton tristeza.png"
            />
          ) : (
            <img
              alt="imagen"
              height={80}
              src="/assets/imagen/boton tristeza apretado.png"
            />
          )
        ) : null}
      </button>
    </div>
  ) : null;
};

const BotonEnviar = ({ enabled, onClick }) => {
  return enabled ? (
    <button
      className="popup-inicio-boton-enviar"
      disabled={!enabled}
      onClick={onClick}
    >
      <img alt="imagen" height={100} src="/assets/imagen/enviar.png" />;
    </button>
  ) : (
    <div style={{ width: "100px", height: "100px" }}></div>
  );
};

const InputNombre = ({ nombre, setNombre }) => {
  return (
    <div className="popup-inicio-input-nombre">
      <input
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default function PopUpInicio(visible, setVisible) {
  const [emocionesSeleccionadas, setEmocionesSeleccionadas] = useState([]);

  const onClickExterno = (emocion, seleccionada) => {
    if (seleccionada) {
      if (!emocionesSeleccionadas.includes(emocion)) {
        setEmocionesSeleccionadas((prev) => [...prev, emocion]);
      }
    } else {
      if (emocionesSeleccionadas.includes(emocion)) {
        setEmocionesSeleccionadas((prev) => prev.filter((e) => e !== emocion));
      }
    }
  };

  const history = useHistory();
  const enviar = () => {
    if (emocionesSeleccionadas.length === 2 && nombre) {
      localStorage.setItem("tesis-tati-nombre", nombre);
      localStorage.setItem("tesis-tati-emocion-1", emocionesSeleccionadas[0]);
      localStorage.setItem("tesis-tati-emocion-2", emocionesSeleccionadas[1]);
      redirect(emocionesSeleccionadas);
    }
  };

  const redirect = (es) => {
    if (es.includes(EMOCIONES[0]) && es.includes(EMOCIONES[5])) {
      history.push("/vista13")
    } else if (es.includes(EMOCIONES[0]) && es.includes(EMOCIONES[6])) {
      history.push("/vista4")
    } else if (es.includes(EMOCIONES[0]) && es.includes(EMOCIONES[4])) {
      history.push("/vista8")
    } else if (es.includes(EMOCIONES[0]) && es.includes(EMOCIONES[3])) {
      history.push("/vista13")
    } else if (es.includes(EMOCIONES[0]) && es.includes(EMOCIONES[2])) {
      history.push("/vista9")
    } else if (es.includes(EMOCIONES[0]) && es.includes(EMOCIONES[1])) {
      history.push("/vista4")
    } else if (es.includes(EMOCIONES[5]) && es.includes(EMOCIONES[4])) {
      history.push("/vista13")
    } else if (es.includes(EMOCIONES[5]) && es.includes(EMOCIONES[3])) {
      history.push("/vista2")
    } else if (es.includes(EMOCIONES[5]) && es.includes(EMOCIONES[2])) {
      history.push("/vista12")
    } else if (es.includes(EMOCIONES[5]) && es.includes(EMOCIONES[6])) {
      history.push("/vista11")
    } else if (es.includes(EMOCIONES[5]) && es.includes(EMOCIONES[1])) {
      history.push("/vista14")
    } else if (es.includes(EMOCIONES[4]) && es.includes(EMOCIONES[3])) {
      history.push("/vista8")
    } else if (es.includes(EMOCIONES[4]) && es.includes(EMOCIONES[2])) {
      history.push("/vista1")
    } else if (es.includes(EMOCIONES[4]) && es.includes(EMOCIONES[6])) {
      history.push("/vista2")
    } else if (es.includes(EMOCIONES[4]) && es.includes(EMOCIONES[1])) {
      history.push("/vista4")
    } else if (es.includes(EMOCIONES[3]) && es.includes(EMOCIONES[2])) {
      history.push("/vista3")
    } else if (es.includes(EMOCIONES[3]) && es.includes(EMOCIONES[6])) {
      history.push("/vista15")
    } else if (es.includes(EMOCIONES[3]) && es.includes(EMOCIONES[1])) {
      history.push("/vista8")
    } else if (es.includes(EMOCIONES[2]) && es.includes(EMOCIONES[6])) {
      history.push("/vista15")
    } else if (es.includes(EMOCIONES[2]) && es.includes(EMOCIONES[1])) {
      history.push("/vista8")
    } else if (es.includes(EMOCIONES[1]) && es.includes(EMOCIONES[6])) {
      history.push("/vista6")
    }
  };

  const [nombre, setNombre] = useState("");

  return visible ? (
    <div className="popup-inicio-dark">
      <div
        className="popup-inicio"
        style={{
          backgroundImage: "url('/assets/imagen/pop up_Mesa de trabajo 1.png')",
        }}
      >
        <InputNombre nombre={nombre} setNombre={setNombre} />

        <div className="popup-inicio-emociones-container">
          {EMOCIONES.map((emocion) => (
            <BotonEmocion
              key={emocion}
              emocion={emocion}
              onClickExterno={onClickExterno}
              seleccionados={emocionesSeleccionadas.length}
            />
          ))}
        </div>

        <BotonEnviar
          onClick={enviar}
          enabled={emocionesSeleccionadas.length === 2 && nombre}
        />
      </div>
    </div>
  ) : null;
}
