import { React, useState } from "react";
//lo siguiente es un codigo que demuestra que react cuando elimina un componente, destruye tambien su estado, así devolviento todo al inicio y renderizandolo desde cero
export const Destroyer = () => {
    //estado para "destruir el componente"
  const [showB, setShowB] = useState(true);
  return (
    <div>
        {/* se renderiza el componente Counter, que es un contador, y se le pasa el estado showB, que es un booleano, si es true, se renderiza el componente, si es false, no se renderiza */}
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>
    </div>
  );
};

function Counter() {
    //los estados del contador y el hover 
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
    //si el hover es true, se le añade la clase hover al contador
  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    //Este componente es un contador, cuando se le da click, se incrementa en 1 el contador y se renderiza con el nuevo valor del contador
    <div
      className={className}
      
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

export default Destroyer;
