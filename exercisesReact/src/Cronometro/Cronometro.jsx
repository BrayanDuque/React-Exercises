import {React, useState, useRef} from "react";

export const Cronometro = () => {
    // se crea el estado de iniciar el tiempo, el tiempo ahora y una referencia para guardar el tiempo todas con valor null
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
    //Se crea una funcion para inicializar el tiempo y se guarda en el estado de tiempo ahora
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    // se crea un intervalo para actualizar el tiempo ahora cada segundo y se guarda en la referencia intervalRef
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  //se crea una funcion para detener el tiempo y se limpia la referencia intervalRef
  function handleStop() {
    clearInterval(intervalRef.current);
  }
  //se calcula el tiempo transcurrido en segundos y se muestra en pantalla
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
     {/* se muestra el tiempo transcurrido en pantalla y dos botones para iniciar y detener el tiempo */}
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default Cronometro;