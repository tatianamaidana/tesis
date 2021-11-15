import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import apiService from "../service/apiService";

export default function EscribirComentario({ visible, close }) {
  const location = useLocation();
  const enviarComentario = (e) => {
    e.preventDefault();
    console.log("Envianndo");
    console.log(comentario);

    let path = location.pathname;
    path = path.replace("/", "");

    setLoading(true);

    apiService(
      "comments/",
      "POST",
      { path, user: { nombre }, text: comentario },
      true,
      null
    ).then((r) => {
      setLoading(false);
      setResponse(r);
      close();

      reset();
    });
  };

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  useEffect(() => {
    setNombre(localStorage.getItem("tesis-tati-nombre") || "");
  }, []);

  const closePopup = () => {
    reset();
    close();
  };

  const onChange = (e) => {
    setComentario(e.target.value);
  };
  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const reset = () => {
    setLoading(false);
    setResponse(null);
    setComentario("");
  };

  const [comentario, setComentario] = useState("");
  const [nombre, setNombre] = useState("");

  return !loading && visible ? (
    <div className="escribir-comentario-outer">
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
                  autoFocus
                  value={comentario}
                  onChange={onChange}
                  name="escribir-comentario"
                  id="escribir-comentario-textarea"
                  rows={5}
                ></textarea>
                <div className="escribir-comentario-nombre-container">
                  <h3>Firma: </h3>
                  <input
                    value={nombre}
                    onChange={onChangeNombre}
                    name="nombre"
                    id="nombre"
                  ></input>
                </div>

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
        ) : null}
      </div>
    </div>
  ) : null;
}
