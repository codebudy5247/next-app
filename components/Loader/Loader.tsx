import React from "react";

const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";
  return (
        <div className="min-h-screen flex justify-center items-center bg-black">

      <div className="loader bg-white p-5 rounded-full flex space-x-3">
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      </div>

    </div>
    // <div className="flex">
    //   <div className={`${circleCommonClasses} mr-1`}></div>
    //   <div className={`${circleCommonClasses} mr-1`}></div>
    //   <div className={`${circleCommonClasses}`}></div>
    // </div>
  );
};

export default Loader;
