import React from "react";

export const Lista = () => {
    // Esta es la lista en React que muestra los elementos del array "frutas"
  const frutas = ["Manzana", "Pera", "Naranja", "Uva", "Cereza"];
  return (
    <ul className="list-group">
      {frutas.map((fruta) => (
        <li key={fruta}  className="list-group-item">{fruta}</li>
      ))}
    </ul>
  );
};

export default Lista;
