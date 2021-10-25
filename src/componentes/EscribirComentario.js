import React, { useState } from "react";
import apiService from "../service/apiService";

export default function EscribirComentario() {
  const enviarComentario = (e) => {
    e.preventDefault();
    console.log("Envianndo");
    console.log(comentario);

    let path = window.location.pathname;
    path = path.replace("/", "");

    apiService(
      "comments/",
      "POST",
      { path, user: { nombre, apellido, email }, text: comentario },
      true,
      null
    ).then((r) => {
      setLoading(false);
      setResponse(r);
    });
  };

  const [loading, setLoading] = useState();
  const [response, setResponse] = useState();

  const closePopup = () => {};

  const onChange = (e) => {
    setComentario(e.target.value);
  };
  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const onChangeApellido = (e) => {
    setApellido(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [comentario, setComentario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="escribir-comentario">
      <img
        className="escribir-comentario-fondo comentario.png"
        height={800}
        src="/assets/imagen/comentario.png"
        alt="imagen"
      />

      {!response ? (
        <div className="escribir-comentario-contenido">
          <div className="escribir-comentario-contenido-inner">
            <form onSubmit={enviarComentario}>
              <textarea
                value={comentario}
                onChange={onChange}
                name="escribir-comentario"
                id="escribir-comentario-textarea"
                rows={6}
              ></textarea>
              <div className="escribir-comentario-nombre-container">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Nombre</h3>
                  <input
                    value={nombre}
                    onChange={onChangeNombre}
                    name="nombre"
                    id="nombre"
                  ></input>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Apellido</h3>
                  <input
                    value={apellido}
                    onChange={onChangeApellido}
                    name="apellido"
                    id="apellido"
                  ></input>
                </div>
              </div>
              <h3>Email</h3>
              <input
                value={email}
                onChange={onChangeEmail}
                name="email"
                id="email"
              ></input>

              <div className="escribir-comentario-botones">
                <button type="reset" onClick={closePopup}>
                  <img
                    className="rechazar.png"
                    widht={100}
                    height={100}
                    src="/assets/imagen/rechazar.png"
                    alt="imagen"
                  />
                </button>
                <button type="submit" onClick={enviarComentario}>
                  <img
                    className="enviar.png"
                    widht={100}
                    height={100}
                    src="/assets/imagen/enviar.png"
                    alt="imagen"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1>Muchas gracias</h1>
      )}
    </div>
  );
}
