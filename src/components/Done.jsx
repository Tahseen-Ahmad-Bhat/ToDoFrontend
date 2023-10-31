import React, { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import TaskItem from "./TaskItem";

const Done = () => {
  const { completedTasks } = useContext(TaskContext);

  return (
    <div className="p-6 bg-neutral-300 max-w-7xl m-4 rounded h-fit">
      <h2 className="font-bold">Done</h2>

      {completedTasks.length != 0 ? (
        completedTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="px-6 pt-4">Nothing completed yet! 😴😴</p>
      )}
    </div>
  );
};

export default Done;
