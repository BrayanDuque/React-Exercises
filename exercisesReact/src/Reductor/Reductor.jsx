import React from "react";
import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export const Reductor = () => {
  //se crea el estado y la importacion del reducer y su acción
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
//se crean las funciones para agregar, cambiar y eliminar las tareas
  function handleAddTask(text) {
    dispatch({
      //se le asigna el tipo de acción el cual corresponde a la acción que va a realizar
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
    //disparch es la forma de realizar el llamado a la acción
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
    {/*Se crea la logica y se le asigna su función correspondiente*/}
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
//se crea el reducer con las acciones que se van a realizar
//se crea un switch para realizar las acciones
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
//se crea un id para las tareas y la lista de tareas iniciales que queremos que aparezcan 
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
