import React, { useState } from "react";
import Wrapper from "../../misc/Wrapper";
import { addTask } from "../../api/task";

const defaultTaskValue = {
  title: "",
  description: "",
};

const AddTaskModal = ({ onClose }) => {
  const [task, setTask] = useState({ ...defaultTaskValue });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };

  const handleAddTask = async (e) => {
    const { error, message } = await addTask(task);
    // console.log(message);
    setTask({ ...defaultTaskValue });

    onClose();
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
          <div className="w-[3px] h-5 rotate-45 bg-white"></div>
          <div className="w-[3px] h-5 -rotate-45 absolute top-2 bg-white"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddTaskModal;
