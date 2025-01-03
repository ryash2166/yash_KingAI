import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`text-black font-medium  rounded-full cursor-pointer py-[6px] px-4 m-0 text-sm whitespace-nowrap w-auto leading-6 ${className} `}
    >
      {title}
    </button>
  );
};

export default Button;
