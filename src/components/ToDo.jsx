import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { getTasks } from "../api/task";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { tasks, error } = await getTasks();

      setTasks([...tasks]);
    };
    fetchTasks();
  }, []);

  return (
    <div className="p-6 bg-neutral-300 max-w-7xl m-4 rounded">
      <h1 className="font-bold">To do</h1>

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ToDo;
