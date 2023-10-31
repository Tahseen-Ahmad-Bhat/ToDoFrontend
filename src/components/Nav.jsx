import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ showTaskModal }) => {
  return (
    <div className="p-4 black-gradient text-white">
      <ul className="flex items-center justify-between max-w-7xl mx-auto font-bold py-2 px-4">
        <li className="py-2 px-4 hover:bg-slate-500 rounded-md cursor-pointer">
          <Link to="/">ToDo</Link>
        </li>
        <li className="py-2 px-4 hover:bg-slate-500 rounded-md cursor-pointer">
          <button onClick={showTaskModal}>Add Task</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
