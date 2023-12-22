import React from "react";

function Button({ data, children }) {
  return (
    <button
      className={`bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 transition-colors p-2 rounded-sm  duration-[3000] border border-t-cyan-500 border-b-pink-500 border-l-cyan-500 border-r-pink-500 shadow-md shadow-gray-400 text-black  max-w-[200px] z-10 `}
    >
      {data} <span>{children}</span>
    </button>
  );
}

export default Button;
