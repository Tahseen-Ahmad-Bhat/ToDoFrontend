import React, { useContext } from "react";
import TaskItem from "./TaskItem";

import { TaskContext } from "../context/TaskProvider.jsx";

const ToDo = () => {
  const { todoTasks } = useContext(TaskContext);

  return (
    <div className="p-6 bg-neutral-300 max-w-7xl m-4 rounded h-fit">
      <h1 className="font-bold">To do</h1>

      {todoTasks.length !== 0 ? (
        todoTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="px-6 pt-4">Nothing scheduled yet! 😴😴</p>
      )}
    </div>
  );
};

export default ToDo;
