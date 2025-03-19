import React from "react";
import { useReducer } from "react";

export const Reductor = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
//Esto es una función reductora utilizando por conveniencia el switch
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      //en el caso de que el usuario quiera añadir una tarea, se añade al array de tareas
      return [
        ...tasks,
        {
          //se añade un objeto con un id, un texto y un estado de hecho
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      //en el caso de que el usuario quiera cambiar una tarea, se cambia el estado y el argumento t es la tarea
      //que se quiere cambiar
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      //en el caso de que el usuario quiera eliminar una tarea, se filtra el array de tareas y se eliminan las tareas
      //con el id que se quiere eliminar
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      //en caso de que el usuario quiera realizar una acción desconocida, se lanza un error
      //indicando que la acción es desconocida
      throw Error("Unknown action: " + action.type);
    }
  }
}
//esta es la lista de tareas
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
export default Reductor;
