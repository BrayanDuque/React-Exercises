import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    //se crea un estado para las tareas, cambiar y eliminar
  return (
    <ul>
        {/*se mapean las tareas*/}
      {tasks.map((task) => (
        //se crea un componente Task con su id y sus funciones
        //se le asigna la tarea y las funciones de cambiar y eliminar
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
    //se crea un estado para editar
  const [isEditing, setIsEditing] = useState(false);
    //se crea un componente para editar la tarea
  let taskContent;
  //si esta editando se crea un input para editar la tarea y un condicional para validar de que el estado de editar sea falso no se edita, se es verdadero si se edita
  //se le asigna el valor de la tarea al input
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        {/*se crea un boton para guardar la tarea editada y cambiar el estado*/}
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
      {/*se crea un label para la tarea y un checkbox para marcar si esta hecha o no y asi mismo al realizar el cambio de estado podemos realizar la acción*/}
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
        {/*Se realiza la logica para el boton de eliminar*/}
      <input
      //el tipo de input que necesitamos
        type="checkbox"
        //se le asigna el valor de la tarea
        checked={task.done}
        //se realiza la funcion para cambiar el estado de la tarea
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {/*Se crea la función y el botón para que realice la eliminacion de la tarea*/}
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
