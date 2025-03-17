import React, { useState } from "react";
import "./App.css";
import Tarjeta from "./Tarjeta/Tarjeta";
import Lista from "./Lista/Lista";
import Buttons from "./Buttons/Buttons";

function App() {
  // const nombre = 'Brayan Duque ';
  const [nombre, setNombre] = useState("");
  function handleNombre(e) {
    setNombre(e.target.value);
  }
  return (
    <>
      {/* <h1>{nombre}</h1>
      <Tarjeta titulo={'Este es el titulo children'}/> */}
      <Buttons />
      <p>tu nombre actual es: {nombre}</p>
      <input type="text" onChange={handleNombre} value={nombre} />
      <p>{nombre}</p>
    </>
  );
}

export default App;
