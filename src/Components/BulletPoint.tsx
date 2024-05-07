import { GlobeAltIcon } from "@heroicons/react/24/solid";
import React from "react";

function BulletPoint() {
  return (
    <div className="flex gap-7">
      <div className="h-16 w-16">
        <GlobeAltIcon className="bg-blue-600 w-[44px] h-[44px] p-1   rounded-md justify-items-center" />
      </div>{" "}
      <div className="">
        <span className="text-lg font-[500] leading-[26px]">
          <p className="">
            Find new shoppers with the SEO, social media, and content marketing
            tools that help you reach customers where they are.
          </p>
        </span>{" "}
      </div>
    </div>
  );
}

export default BulletPoint;
