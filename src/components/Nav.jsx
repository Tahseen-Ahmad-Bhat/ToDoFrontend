import React from "react";

const Nav = ({ showTaskModal }) => {
  return (
    <div className="p-4 black-gradient text-white">
      <ul className="flex items-center justify-between max-w-7xl mx-auto font-bold py-2 px-4">
        <li>
          <a href="#">ToDo</a>
        </li>
        <li>
          <button onClick={showTaskModal}>Add Task</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
