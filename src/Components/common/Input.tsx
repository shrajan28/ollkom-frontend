import React, { InputHTMLAttributes } from "react";

function Input({
  placeholder,
  onChange,
  type,
}: {
  placeholder?: string;
  onChange: () => void;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}) {
  return (
    <input
      className="px-5 py-[13px] w-full rounded-[6px] focus-visible:outline-[#1562D6]  border-[#DFE4EA] border"
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    ></input>
  );
}

export default Input;
