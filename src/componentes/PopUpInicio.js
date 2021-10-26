import React, { useState } from "react";

export const EMOCIONES = [
  "afecto",
  "alegría",
  "amor",
  "angustia",
  "curiosidad",
  "melancolía",
  "miedo",
  "tristeza",
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
    <button disabled={!enabled} onClick={onClick}>
      <img alt="imagen" height={100} src="/assets/imagen/enviar.png" />;
    </button>
  ) : (
    <h5>Seleccionar 2 emociones y poner el nombre :)</h5>
  );
};

const InputNombre = ({ nombre, setNombre }) => {
  return (
    <div>
      <img
        alt="imagen"
        className="boton nombre.png"
        widht={100}
        height={100}
        src="/assets/imagen/boton nombre.png"
      />
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

  const enviar = () => {
    if (emocionesSeleccionadas.length === 2 && nombre) {
      localStorage.setItem("tesis-tati-nombre", nombre);
      localStorage.setItem("tesis-tati-emocion-1", emocionesSeleccionadas[0]);
      localStorage.setItem("tesis-tati-emocion-2", emocionesSeleccionadas[1]);
    }
  };

  const [nombre, setNombre] = useState("");

  return visible ? (
    <div className="popup-inicio-dark">
      <div className="popup-inicio">
        <InputNombre nombre={nombre} setNombre={setNombre} />

        <h1>{nombre}</h1>
        {emocionesSeleccionadas.map((emocion) => (
          <h1>{emocion}</h1>
        ))}

        <div className="popup-inicio-emociones-container">
          {EMOCIONES.map((emocion) => (
            <BotonEmocion
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
