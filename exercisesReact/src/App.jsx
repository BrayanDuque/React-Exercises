import React, { useState } from 'react';
import './App.css';
import Tarjeta from './Tarjeta/Tarjeta';
import Lista from './Lista/Lista';
import Buttons from './Buttons/Buttons';

function App() {
  // const nombre = 'Brayan Duque ';
  const [contador, setContador] = useState(0);
  return (
    <>
      {/* <h1>{nombre}</h1>
      <Tarjeta titulo={'Este es el titulo children'}/> */}
      <Buttons/>
      <p>
        Contador: {contador}
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      </p>

    </>
  );
}

export default App;
