import React from "react";
import themeHero from "../assets/themeHero.png";
import Button from "./Button";
import ProductCard from "./ProductCard";
import ProductListing from "./ProductListing";
import { Outlet } from "react-router-dom";

function ThemeListing() {
  return (
    <>
      <div className="text-white bg-gradient-to-b from-[#111928] to-[#1562D6]">
        <div className="max-w-[82%] flex justify-between items-center gap-16 mx-auto">
          <div className="flex flex-col gap-7">
            <span className="text-5xl font-bold">
              Ollkom themes—
              <br />
              built for commerce
            </span>
            <span>
              Take your store from launch <br /> to scale with themes that make
              selling easy.
            </span>
          </div>
          <img src={themeHero} />
        </div>
      </div>

      <div className="max-w-[82%] bg-white mx-auto py-16 flex flex-col gap-[50px] ">
        <ProductListing />
      </div>
      <Outlet />
    </>
  );
}

export default ThemeListing;
