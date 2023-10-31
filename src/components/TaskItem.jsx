import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { deleteTask } from "../api/task";
import { TaskContext } from "../context/TaskProvider.jsx";

const TaskItem = ({ task }) => {
  const [isLinkDisabled, setIsLinkDisabled] = useState(false);

  const { id } = task;

  const { tasks, setTasks } = useContext(TaskContext);

  const handleDeleteTask = async (e) => {
    const { error, message } = await deleteTask(id);

    console.log(message);

    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks([...newTasks]);
  };

  return (
    <div className="space-y-4 ">
      <div className=" bg-slate-400 rounded-md my-4 flex items-center justify-between hover:bg-slate-500">
        <Link to={`/task/${id}`} className="flex-1 px-6 py-4">
          {task.title}
        </Link>

        <div
          className="cursor-pointer font-bold text-xl p-2 m-3 hover:bg-white rounded-full"
          onClick={handleDeleteTask}
          title="Delete"
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
