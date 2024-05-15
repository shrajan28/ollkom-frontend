import React, { PropsWithChildren } from "react";

type ButtonProps = {
  className?: string;
  title?: string;
};

const Button = ({
  children,
  className,
  title,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`inline-flex mt-2 mb-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  h-10 px-4 py-1  bg-blue-700 text-white ${className}`}
    >
      {title ? title : children}
    </button>
  );
};

export default Button;
