import React from 'react';

type ButtonProps = {
    title: any;
  };
  
  const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <button className="inline-flex mt-2 mb-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  h-10 px-4 py-1  bg-blue-700 text-white">
            { title }
        </button>
    );
}

export default Button;