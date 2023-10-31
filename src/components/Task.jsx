import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";
import { updateTask } from "../api/task";
import { notify } from "../util/Notification";

const Task = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const navigate = useNavigate();

  const { taskId } = useParams();
  const { tasks, setTasks } = useContext(TaskContext);

  const handleCheckboxChange = async (e) => {
    setIsCompleted(!isCompleted);

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.status = "done";
        return task;
      } else {
        return task;
      }
    });

    setTasks([...updatedTasks]);

    navigate("/");

    // Send an update request to backend
    const { error, message } = await updateTask(taskId);

    if (error) return notify("error", error);

    notify("success", message);
  };

  useEffect(() => {
    const task = tasks.find((task) => {
      return task.id === taskId;
    });

    setCurrentTask({ ...task });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-5">
      <div className="p-6 py-6 bg-slate-600 text-white space-y-10 max-w-2xl min-w-[70vw] mx-auto rounded-lg sm:mx-5">
        <div className="flex items-center gap-20 ">
          <h2 className="font-bold">Task:</h2>
          <p>{currentTask?.title}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Description:</h3>
          <p className=" text-sm p-4 border-2 rounded-lg ml-4 md:w-2/3 hover:bg-slate-700">
            {currentTask?.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {currentTask?.status === "todo" ? (
            <div className="flex items-center gap-4">
              <label htmlFor="done">Mark as done</label>
              <input
                type="checkbox"
                checked={isCompleted}
                id="done"
                onChange={handleCheckboxChange}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          ) : (
            <>
              <span className="font-bold">Status:</span>
              <p className=" text-green-400">Task completed</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
