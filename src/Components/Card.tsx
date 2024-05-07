import React from "react";

type CardProps = {
  icon: any;
  heading: string;
  description: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  icon,
  heading,
  description,
  className,
}) => {
  return (
    <div className=" rounded-[20px] bg-gradient-to-b from-[#111928] to-[#1562D6]">
      <div
        className={` rounded-[20px] m-[1px] overflow-hidden flex flex-col gap-[14px] border-1  border-[linear-gradient(180deg, #111928 0%, #1562D6 100%)]  p-10  shadow-[0_5px_12px_0_rgba(0,0,0,0.1)]
      bg-dark-blue ${className}`}
      >
        <div className="bg-blue-600 mb-4 p-[10px] w-min rounded-xl justify-items-center">
          {icon}
        </div>
        <span className="text-2xl font-bold">{heading}</span>
        <p className="text-base leading-6 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Card;
