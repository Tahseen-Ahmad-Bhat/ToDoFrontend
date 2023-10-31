import React, { createContext, useEffect, useState } from "react";
import { getTasks } from "../api/task";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const newTodoTasks = tasks.filter((task) => task.status === "todo");
    setTodoTasks([...newTodoTasks]);

    const newCompletedTasks = tasks.filter((task) => task.status === "done");
    setCompletedTasks([...newCompletedTasks]);
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { tasks, error } = await getTasks();

      setTasks([...tasks]);
    };
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        todoTasks,
        setTodoTasks,
        completedTasks,
        setCompletedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
