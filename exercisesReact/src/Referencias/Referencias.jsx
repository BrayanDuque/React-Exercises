import React from "react";
//se importa useRef para poder hacer uso de las referencias
import { useRef } from "react";

export const Referencias = () => {
  //se crea una constante ref que tendra el valor de useRef(0) para poder hacer uso de las referencias
  const ref = useRef(0);
  const inputRef = useRef(null);
  //se crea una función para el evento onClick y se incrementa el valor de la referencia con cada click en el botón
  function handleClick() {
    ref.current++;
    alert("ya son " + ref.current + " clicks");
  }
  function handleFocus() {
    //se hace uso de la referencia inputRef para hacer focus en el input
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Referencias</h1>
      {/* se crea un botón que al hacer click se ejecutara la función handleClick */}
      <button onClick={handleClick}>Clicks</button>

      {/* se crea un input y se le asocia la referencia inputRef */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>enfocar en el input</button>
    </div>
  );
};

export default Referencias;
