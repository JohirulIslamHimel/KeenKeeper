import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 w-full">
      <FadeLoader color="#244D3F" />
      <p className="text-gray-500 font-bold text-lg animate-pulse tracking-wide mt-4">
        Loading Data...
      </p>
    </div>
  );
};

export default Loading;
