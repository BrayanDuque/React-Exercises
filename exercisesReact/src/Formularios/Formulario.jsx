import React from "react";
import { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  function handleNombre(e) {
    setNombre(e.target.value);
  }
  return (
    <>
      <p>tu nombre actual es: {nombre}</p>
      <input type="text" onChange={handleNombre} value={nombre} />
      <p>{nombre}</p>
    </>
  );
};
