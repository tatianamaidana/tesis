import React, { useContext, useState } from "react";
import apiService from "../service/apiService";

import { DataContext } from "../service/DataProvider";

export default function Comentario() {
  const {
    data,
    loading,
    loadingMore,
    error,
    partialCount,
    totalCount,
    pagina,
    localData,
    setLocalData,
  } = useContext(DataContext);

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
    );
  };

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
    <div>
      <div>
        <p>Comment</p>
        <img
          class="papel 1.png"
          widht={500}
          height={300}
          src="/assets/imagen/papel 1.png"
        />

        <img
          class="papel 2.png"
          widht={500}
          height={300}
          src="/assets/imagen/papel 2.png"
        />

        <img
          class="papel 3.png"
          widht={500}
          height={300}
          src="/assets/imagen/papel 3.png"
        />

        <img
          class="papel 4.png"
          widht={500}
          height={300}
          src="/assets/imagen/papel 4.png"
        />
      </div>

      <div>
        <p>Comment</p>
        <p>{data ? data[0]?.text : null}</p>
        <p>{data ? data[0]?.user.nombre : null}</p>
        <p>{data ? data[0]?.user.apellido : null}</p>
      </div>

      <div>
        <h1> Escribir comentario </h1>
        <form onSubmit={enviarComentario}>
          <h3>Comentario</h3>
          <input
            value={comentario}
            onChange={onChange}
            name="escribir-comentario"
            id="escribir-comentario"
          ></input>
          <h3>Nombre</h3>
          <input
            value={nombre}
            onChange={onChangeNombre}
            name="nombre"
            id="nombre"
          ></input>
          <h3>Apellido</h3>
          <input
            value={apellido}
            onChange={onChangeApellido}
            name="apellido"
            id="apellido"
          ></input>
          <h3>Email</h3>
          <input
            value={email}
            onChange={onChangeEmail}
            name="email"
            id="email"
          ></input>
          <input type="submit" value="comentar"></input>
        </form>
      </div>
    </div>
  );
}
