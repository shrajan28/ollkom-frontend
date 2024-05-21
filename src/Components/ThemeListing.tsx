import React, { useLayoutEffect, useRef, useState } from "react";
import themeHero from "../assets/themeHero.png";
import Button from "./Button";
import ProductCard from "./ProductCard";
import ProductListing from "./ProductListing";
import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { axiosPrivate } from "../api/axios";

export const themeListingLoader = async (currentPage: number = 1) => {
  const res = await axiosPrivate.post("/api/theme", {
    pageSize: 10,
    currentPage: currentPage,
    paramsList: [],
  });
  return await res.data;
};
function ThemeListing() {
  const [themeListing, setThemeListing] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useRef(null);
  const totaResults = useRef(null);
  useLayoutEffect(() => {
    themeListingLoader(currentPage).then((resp) => {
      setThemeListing(resp.data.results);
      totalPages.current = resp.data.pagination?.totalPages;
      totaResults.current = resp.data.pagination?.resultSize;
    });
  }, [currentPage]);

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
        {themeListing ? (
          <ProductListing
            setCurrentPage={setCurrentPage}
            productList={themeListing}
            totalPages={totalPages?.current! + 10}
            currentPage={currentPage}
          />
        ) : (
          <h2 className="text-center text-5xl">No Data Found</h2>
        )}
      </div>

      <Outlet />
    </>
  );
}

export default ThemeListing;
