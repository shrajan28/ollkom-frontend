import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  productImageUrl,
  tags,
  title,
  price,
}: {
  id: number | string;
  productImageUrl: string;
  title: string;
  price: number | string;
  tags?: string[];
}) {
  return (
    <Link
      to={`/themedetail/${id}`}
      className="text-[#111928] shadow-[0px_5px_12px_0px_#0000001A] "
    >
      <img src={productImageUrl} width={370} height={426}></img>
      <div className="p-4 font-semibold">
        <div className="flex justify-between">
          <span className="">{title}</span>
          <span>SAR {price}</span>
        </div>
        <div className="flex gap-4 mt-2 flex-wrap">
          {tags?.map((tag) => {
            return (
              <span className="bg-[#6373811A] text-xs h-fit flex text-nowrap w-fit py-[3px] px-[10px] text-[#637381]">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
