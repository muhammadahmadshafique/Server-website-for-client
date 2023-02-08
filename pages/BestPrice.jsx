import Card from "@/components/Card";
import React from "react";

export default function BestPrice() {
  return (
    <div className="bg-[#13212E]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-4 pb-[33px]">
        <p className="text-[44px] w-[55%] flex flex-col text-white items-center justify-center mx-auto">
          BEST PRICE
        </p>
        <p className="text-[21px] opacity-80 w-[55%] flex flex-col text-white items-center justify-center mx-auto">
          Wherever you are in the world, you can find a server right for you
        </p>
      </div>
      <div className="flex items-center justify-between w-[70%] mx-auto py-12">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}
