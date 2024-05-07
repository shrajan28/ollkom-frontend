import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`inline-flex mt-2 mb-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  h-10 px-4 py-1  bg-blue-700 text-white ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
