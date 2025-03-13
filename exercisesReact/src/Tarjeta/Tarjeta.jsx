import React, { useState } from "react";
import Lista from "../Lista/Lista";

export const Tarjeta = (children) => {
  let contenido =
    "Este es el contenido de la tarjeta que te ayudara a tu aprendizaje";
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div
      className="card d-flex justify-content-center text-center"
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{children.titulo}</h5>
        <p className="card-text">{contenido}</p>
        <Lista />
        <a
          href=""
          onClick={handleClick}
          className={`btn btn-${isLoading ? "primary" : "secundary"}`}
        >
          {isLoading ? "cargando" : "iniciar"}
        </a>
      </div>
    </div>
  );
};

export default Tarjeta;
//queda pendiente el uso de las props entre componentes
