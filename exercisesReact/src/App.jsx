import React from 'react';
import './App.css';
import Tarjeta from './Tarjeta/Tarjeta';

function App() {
  const nombre = 'Brayan Duque ';
  return (
    <>
      <h1>{nombre}</h1>
      <Tarjeta/>
    </>
  );
}

export default App;
