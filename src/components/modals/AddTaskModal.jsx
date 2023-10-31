import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Wrapper from "../../misc/Wrapper";
import { addTask } from "../../api/task";
import Close from "../../misc/Close";
import { TaskContext } from "../../context/TaskProvider";
import { useNavigate } from "react-router-dom";

const defaultTaskValue = {
  title: "",
  description: "",
  status: "todo",
};

const AddTaskModal = ({ onClose }) => {
  const [task, setTask] = useState({ ...defaultTaskValue });

  // Get tasks from taskContext
  const { tasks, setTasks } = useContext(TaskContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };

  const handleAddTask = async (e) => {
    // generate unique id
    const id = uuidv4();
    task.id = id;

    // Add the given task to tasklist before storing in the backend
    tasks.push(task);
    setTasks([...tasks]);

    const { error, message } = await addTask(task);
    // console.log(message);
    setTask({ ...defaultTaskValue });

    onClose();

    navigate("/");
  };

  const { title, description } = task;

  return (
    <Wrapper>
      <div className="flex flex-col bg-black text-white w-fit p-4 rounded-lg space-y-4 h-fit relative">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter task title"
          className="bg-slate-700 px-4 py-2 rounded border-none outline-none placeholder:text-sm"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={description}
          rows="3"
          placeholder="Enter task description"
          className="bg-slate-700 px-4 py-2 rounded border-none outline-none resize-none h-fit placeholder:text-sm"
          onChange={handleChange}
        ></textarea>
        <button
          className="bg-slate-700 px-4 py-2 rounded w-fit hover:bg-slate-500"
          onClick={handleAddTask}
        >
          Add Task
        </button>

        {/* Close button */}
        <div
          className="absolute -top-20 -right-20 cursor-pointer p-2 px-4 rounded-full bg-black"
          onClick={onClose}
        >
          <Close />
        </div>
      </div>
    </Wrapper>
  );
};

export default AddTaskModal;
