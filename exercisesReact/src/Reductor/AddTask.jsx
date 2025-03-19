import { useState } from "react";

export default function AddTask({ onAddTask }) {
  //se crea un estado para el texto
  const [text, setText] = useState("");
  return (
    <>
  {/*se crea un input para agregar una tarea y un boton para agregarla*/}
      <input
        placeholder="Add task"
        //se le asigna el valor del estado text
        value={text}
        //se realiza la funcion para realizar el cambio del estado
        //se le asigna el valor del input al estado text
        onChange={(e) => setText(e.target.value)}
      />
      <button
      //se realiza la funcion para agregar la tarea
      //se limpia el estado text
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
