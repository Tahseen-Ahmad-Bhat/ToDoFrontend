import React from "react";

const TaskItem = ({ task }) => {
  const handleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="space-y-4 ">
      <div className="p-4 bg-slate-400 rounded-md my-4 flex items-center justify-between">
        <p>{task.title}</p>
        <div className="flex items-center justify-center gap-4">
          <label htmlFor="doing">Doing</label>
          <input
            type="checkbox"
            name="doing"
            id="doing"
            onClick={handleClick}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <label htmlFor="done">Done</label>
          <input type="checkbox" name="done" id="done" />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
