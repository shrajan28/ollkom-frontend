import React from "react";
import theme1 from "../assets/theme1.png";
import theme2 from "../assets/theme2.png";
import ProductCard from "./ProductCard";
import Button from "./Button";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";

const productList = [
  {
    productImageUrl: theme1,
    title: "Shark",
    id: "1",
    price: "199",
    tags: ["Store Locator", "Locator", "Event Calender"],
  },
  {
    productImageUrl: theme2,
    title: "Shark",
    id: "1",
    price: "199",
    tags: ["Store Locator", "Locator", "Event Calender"],
  },
  {
    productImageUrl: theme1,
    title: "Shark",
    id: "1",
    price: "199",
    tags: ["Store Locator", "Locator", "Event Calender"],
  },
  {
    productImageUrl: theme2,
    title: "Shark",
    id: "1",
    price: "199",
    tags: ["Store Locator", "Locator", "Event Calender"],
  },
  {
    productImageUrl: theme1,
    title: "Shark",
    id: "1",
    price: "199",
    tags: [
      "Store Locator",
      "Event Calender",
      "Age Verifier",
      "Countdown Timer",
    ],
  },
  {
    productImageUrl: theme1,
    title: "Shark",
    id: "1",
    price: "199",
    tags: ["Store Locator", "Store Locator", "Locator", "Event Calender"],
  },
];
function ProductListing({
  productList,
  setCurrentPage,
  totalPages,
  currentPage,
}: {
  productList: any;
  setCurrentPage: any;
  totalPages: number;
  currentPage: number;
}) {
  return (
    <>
      <h2 className="text-5xl mx-auto text-[#111928] font-bold text-center">
        Discover the right theme <br /> for your Business
      </h2>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-end">
        <input
          placeholder="Find your theme"
          className=" px-5 py-[13px] border rounded-md sm:max-w-md focus:border-blue-500 focus:ring-blue-500"
        />
        <Button title={"Submit"} className="!m-0" />
      </div>
      <div className="flex justify-center">
        <Button title="All Projects"></Button>{" "}
        <Button title="All Projects"></Button>
        <Button title="All Projects"></Button>
        <Button title="All Projects"></Button>
        <Button title="All Projects"></Button>
      </div>
      <div className="flex w-full self-center items-center justify-between">
        <span className="text-[#637381]">Showing 1 out of 1234</span>
        <select className="px-5 py-3 text-[#637381] flex justify-around focus:border-none border-[#DFE4EA] border rounded-md">
          <option selected>Best Match</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-12">
        {productList.map((product: any) => {
          return (
            <ProductCard
              id={product.id}
              productImageUrl={product.thumbnail}
              title={product.name}
              price={product.price}
              tags={product.tags}
            />
          );
        })}
      </div>
      <ResponsivePagination
        maxWidth={378}
        current={currentPage}
        total={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default ProductListing;
