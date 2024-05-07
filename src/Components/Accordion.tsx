import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";

function Accordion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!ref || !ref.current) return;
    !ref.current.hasAttribute("data-expanded")
      ? ref.current.setAttribute("data-expanded", "true")
      : ref.current.removeAttribute("data-expanded");
  };
  return (
    <div
      ref={ref}
      onClick={toggle}
      className=" group rounded-[20px] bg-gradient-to-b  from-[#111928] to-[#1562D6]"
    >
      <div className="flex p-10 rounded-[20px] m-[1px] max-h-[105px]   overflow-hidden group-data-[expanded=true]:max-h-[177px]  gap-6 bg-dark-blue group-data-[expanded=true]:bg-white transition-all duration-500">
        <div className="bg-[#D0E0F7]  rounded-[10px] p-1 h-min">
          <ChevronDownIcon className=" fill-[#1562D6] h-[22px] w-[22px]  group-data-[expanded=true]:rotate-180 transition-all" />
        </div>
        <div className="flex flex-col gap-6 m-[1px]">
          <span className="text-lg font-semibold group-data-[expanded=true]:text-[#111928]">
            {title}
          </span>{" "}
          <p className="text-[#637381] invisible group-data-[expanded=true]:visible">
            {description}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
