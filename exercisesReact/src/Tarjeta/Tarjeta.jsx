import React from 'react';

export const Tarjeta = () => {
  let titulo = 'Esto es nuevo para mi y para ti';
  let contenido = 'Este es el contenido de la tarjeta que te ayudara a tu aprendizaje';
  return (
    <div className="card d-flex justify-content-center text-center" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{contenido}</p>
        <a href="#" className="btn btn-primary">Enviar</a>
      </div>
    </div>
  );
};

export default Tarjeta;