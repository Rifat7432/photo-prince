import React from "react";
// this component usage for show a spinner
const Loading = () => {
  return (
    <div className=" mx-auto my-auto ">
      <div className="w-16 h-16  mx-8 my-8  border-4 border-dashed rounded-full animate-spin dark:border-indigo-400"></div>
    </div>
  );
};

export default Loading;
