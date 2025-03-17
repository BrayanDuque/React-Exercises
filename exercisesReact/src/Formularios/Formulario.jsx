import React from "react";
import { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  // Esta es una función para cambiar el nombre de forma sincronizada
  function handleNombre(e) {
    setNombre(e.target.value);
  }
  //esta funcion es para prevenir la acción por defecto del formulario al enviar
  function handleSubmit(e) {
    e.preventDefault();
  };
  return (
    <>
      <p>tu nombre actual es: {nombre}</p>
      <input type="text" onChange={handleNombre} value={nombre} />
      <button type="submit" onClick={handleSubmit}>Enviar</button>
    </>
  );
};

export default Formulario;
