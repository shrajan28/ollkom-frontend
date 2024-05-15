import React, { useState } from "react";
import { useCurrentPath } from "../Hooks/use-path";
import { useLocation, useParams } from "react-router-dom";
import Button from "./Button";
import Partition from "./Partition";
import theme1 from "../assets/theme1.png";
import theme2 from "../assets/theme2.png";
import ProductCard from "./ProductCard";
import alhome from "../assets/alhome.png";

type ThemeDetail = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  version: string;
  createdDate: string;
  support: string[];
  sampels: any[];
};

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
];

const data: ThemeDetail = {
  id: 1,
  name: "Alhome - Meet your Furniture needs",
  description: "Classy design combined with sales-optimized tools.",
  version: "Version 1.01 ",
  createdDate: "December 2023",
  support: [
    "EU translations (EN, FR, IT, DE, ES)",
    " Event calendar",
    " Age verifier",
    "Countdown timer",
    " Color swatches",
  ],
  image: alhome,
  category: "Furniture",
  price: 199,
  sampels: [
    {
      img: theme1,
      text: "Meet AutoManage, the best AI management tools",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: theme1,
      text: "Meet AutoManage, the best AI management tools",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: theme1,
      text: "Meet AutoManage, the best AI management tools",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
};
function ThemeDetail() {
  const path = useParams();
  const [themeDetails, setThemeDetails] = useState<ThemeDetail>(data);
  return (
    <>
      <div className="bg-[#323031E5] text-white">
        <div className="container py-[101.5px]   relative  ">
          <img
            src={alhome}
            className="absolute w-full h-full object-cover -z-10 blur-lg "
            width={1000}
            height={792}
          ></img>
          <div className="flex gap-[68px]">
            <div className="flex flex-col ">
              <span className="text-5xl font-bold mb-2">
                {themeDetails?.name}
              </span>
              <span>
                {themeDetails?.version}|{themeDetails?.createdDate}
              </span>
              <p className="py-7 text-3xl font-bold">
                {themeDetails?.description}
              </p>
              <div className="flex flex-col">
                <span className="text-lg font-[500] mb-2">
                  Fulfil every order
                </span>
                <span>Includes support for:</span>
                <ul className=" list-disc ml-6">
                  {themeDetails?.support.map((support) => {
                    return <li>{support}</li>;
                  })}
                </ul>
              </div>
            </div>
            <img src={themeDetails?.image} width={589} height={515}></img>
          </div>
          <Button title="Try Now" /> <Button title="View Demo Store" />
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-16">
          <div className="flex gap-[30px] pb-16">
            {themeDetails?.sampels.map((sample) => {
              return (
                <div className="flex-col flex gap-[15px]">
                  <img
                    src={sample.img}
                    width={370}
                    height={220}
                    className="object-cover h-[220px]"
                  />
                  <span className="mt-[15px] font-semibold text-2xl">
                    {sample.text}
                  </span>
                  <span className="text-[#637381]">{sample.description}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex gap-[10px] border p-[14px] border-[#DFE4EA]">
              <Button title="Features" />
              <Button title="Reviews" />
              <Button title="Support and Documentation" />
            </div>
            <div className="flex gap-4 border-b border-[#8899A8] pb-[30px]">
              <span className="text-2xl font-semibold ">
                This theme is great for
              </span>
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 border-b border-[#8899A8] pb-[30px]">
              <span className="text-2xl font-semibold ">
                This theme is great for
              </span>
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-4 border-b border-[#8899A8] pb-[30px]">
              <span className="text-2xl font-semibold ">
                This theme is great for
              </span>
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-6">
                <Partition />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-lg font-semibold">
                    Visual storytelling
                  </span>
                  <span>
                    Designed to showcase images to support visual brand
                    storytelling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E8EFFB]">
        <div className="container py-16">
          <span className="text-[40px]  text-[#111928] font-bold">
            Build with confidence
            <br /> — the Theme Store
            <br /> promise
          </span>
          <div className="grid grid-cols-3 mt-12 gap-x-[34px] gap-y-10">
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] bg-[#1562D6] p-[11px]   rounded-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-2xl">
                  Works with the latest Ollkom features
                </span>
                <p className="text-base">
                  Themes on the Ollkom Theme Store are guaranteed to stay up to
                  date and work with Ollkom’s ever-growing feature set.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] bg-[#1562D6] p-[11px]   rounded-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-2xl">
                  Works with the latest Ollkom features
                </span>
                <p>
                  Themes on the Ollkom Theme Store are guaranteed to stay up to
                  date and work with Ollkom’s ever-growing feature set.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] bg-[#1562D6] p-[11px]   rounded-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-2xl">
                  Works with the latest Ollkom features
                </span>
                <p>
                  Themes on the Ollkom Theme Store are guaranteed to stay up to
                  date and work with Ollkom’s ever-growing feature set.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] bg-[#1562D6] p-[11px]   rounded-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-2xl">
                  Works with the latest Ollkom features
                </span>
                <p>
                  Themes on the Ollkom Theme Store are guaranteed to stay up to
                  date and work with Ollkom’s ever-growing feature set.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] bg-[#1562D6] p-[11px]   rounded-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-2xl">
                  Works with the latest Ollkom features
                </span>
                <p>
                  Themes on the Ollkom Theme Store are guaranteed to stay up to
                  date and work with Ollkom’s ever-growing feature set.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[70px] h-[70px] bg-[#1562D6] p-[11px]   rounded-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-2xl">
                  Works with the latest Ollkom features
                </span>
                <p>
                  Themes on the Ollkom Theme Store are guaranteed to stay up to
                  date and work with Ollkom’s ever-growing feature set.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container py-16">
          <h2 className="text-5xl leading-[58px] font-bold text-center">
            More themes on <br /> Furnitures
          </h2>
          <div className="flex gap-[30px] mt-[33px]">
            {productList.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeDetail;
