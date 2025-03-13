import React, { useState } from "react";

export const Buttons = () => {
  const listado = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [list, setList] = useState(listado);
  const handleClick = () => setList([...list, "Baloto"]);
  const elimination = () => setList(list.slice(0, -1));

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        agregar
      </button>
      <button
        className="btn btn-danger"
        onClick={elimination}
      >
        eliminar
      </button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Buttons;
