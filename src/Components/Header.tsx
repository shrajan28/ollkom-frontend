import React from "react";
import Button from "./Button";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useCurrentPath } from "../Hooks/use-path";

type HeaderProps = {
  title: string;
};

const selectedMenuClass = "rounded-full border border-blue-700 ";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const currentPath = useCurrentPath();

  return (
    <div className="bg-dark-blue text-white  ">
      <div className="max-w-[82%] mx-auto py-[10px] flex justify-between items-center border-b   ">
        <div className="flex items-center gap-4">
          <span className=" flex font-[500]">About</span>
          <span className="text-border-grey text-lg">|</span>
          <span className=" flex font-[500]">Press</span>
        </div>
        <div className="flex items-center gap-4">
          <span className=" flex font-[500]">Contact Sales</span>
          <span className="text-border-grey text-lg">|</span>
          <span className=" flex font-[500]">SAR</span>
        </div>
      </div>
      <div className="max-w-[82%] py-6 mx-auto  flex justify-between items-center   ">
        <div className="flex items-center gap-8 font-[500] text-white ">
          <Link
            to={"/"}
            className={`px-4 py-2 ${
              currentPath == "/" ? selectedMenuClass : ""
            } `}
          >
            Home
          </Link>
          <Link
            to={"/themes"}
            className={`px-4 py-2 ${
              currentPath?.includes("/themes") ? selectedMenuClass : ""
            } `}
          >
            {" "}
            Solution
          </Link>
          <Link
            to={"/subscription"}
            className={`px-4 py-2 ${
              currentPath?.includes("/subscription") ? selectedMenuClass : ""
            } `}
          >
            <span>Pricing</span>
          </Link>
        </div>
        <img src={logo}></img>
        <div className="flex  items-center gap-6">
          <span className=" flex font-[500]">Sign In</span>
          <Button title={"Start Free Trial"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
