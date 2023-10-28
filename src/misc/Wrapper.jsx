import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-500 backdrop-blur-sm bg-opacity-50">
      {children}
    </div>
  );
};

export default Wrapper;
