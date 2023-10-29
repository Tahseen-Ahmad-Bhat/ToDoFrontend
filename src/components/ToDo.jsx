import React from "react";
import TaskItem from "./TaskItem";

const ToDo = () => {
  return (
    <div className="p-6 bg-neutral-300 max-w-7xl m-4 rounded">
      <h1 className="font-bold">To do</h1>
      <TaskItem />
    </div>
  );
};

export default ToDo;
