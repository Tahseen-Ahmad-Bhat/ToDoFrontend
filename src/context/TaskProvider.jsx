import React, { createContext, useEffect } from "react";
import { getTasks } from "../api/task";
import { notify } from "../util/Notification";
import { useReducer } from "react";
import { createAction } from "../util/reducer/reducer.util";

export const TaskContext = createContext();

const TASK_ACTION_TYPES = {
  SET_TASKS: "SET_TASKS",
};

const INITIAL_STATE = {
  tasks: [],
  todoTasks: [],
  completedTasks: [],
};

const taskReducer = (state, action) => {
  const { type, payload } = action;

  console.log(payload);

  switch (type) {
    case TASK_ACTION_TYPES.SET_TASKS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} in taskReducer!`);
  }
};

const TaskProvider = ({ children }) => {
  const [{ tasks, todoTasks, completedTasks }, dispatch] = useReducer(
    taskReducer,
    INITIAL_STATE
  );

  const updateTaskReducer = (tasks) => {
    const newTodoTasks = tasks.filter((task) => task.status === "todo");

    const newCompletedTasks = tasks.filter((task) => task.status === "done");

    dispatch(
      createAction(TASK_ACTION_TYPES.SET_TASKS, {
        tasks,
        todoTasks: newTodoTasks,
        completedTasks: newCompletedTasks,
      })
    );
  };

  const setTasks = (newTasks) => {
    updateTaskReducer(newTasks);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const { tasks, error } = await getTasks();

      if (error) return notify("error", error);

      updateTaskReducer(tasks);
    };
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        todoTasks,
        setTodoTasks: () => null,
        completedTasks,
        setCompletedTasks: () => null,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
