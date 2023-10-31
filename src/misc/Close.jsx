import React from "react";

const Close = () => {
  return (
    <>
      <div className="w-[3px] h-5 rotate-45 bg-white"></div>
      <div className="w-[3px] h-5 -rotate-45 absolute top-2 bg-white"></div>
    </>
  );
};

export default Close;
