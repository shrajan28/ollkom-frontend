import React from 'react';

type ButtonWhiteProps = {
    title: any;
  };
  
  const ButtonWhite: React.FC<ButtonWhiteProps> = ({ title }) => {
    return (
        <button className="inline-flex mt-2 mb-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  h-10 px-4 py-1 w-2/3 bg-white text-blue-700  shadow-md">
            { title }
        </button>
    );
}

export default ButtonWhite;