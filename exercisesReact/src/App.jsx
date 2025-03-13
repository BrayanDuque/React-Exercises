import React from 'react';
import './App.css';
import Tarjeta from './Tarjeta/Tarjeta';
import Lista from './Lista/Lista';

function App() {
  const nombre = 'Brayan Duque ';
  return (
    <>
      <h1>{nombre}</h1>
      <Tarjeta titulo={'Este es el titulo children'}/>
      
    </>
  );
}

export default App;
