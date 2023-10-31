import React from "react";
import ToDo from "./ToDo";
import Done from "./Done";

const Main = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <ToDo />

      <Done />
    </div>
  );
};

export default Main;
