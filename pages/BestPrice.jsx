import Card from "@/components/Card";
import React from "react";

export default function BestPrice() {
  return (
    <div className="bg-[#13212E] font-['Poppins]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-4 pb-[33px]">
        <p className="text-[44px] md:w-[55%] w-[85%] flex flex-col text-white items-center justify-center mx-auto">
          BEST PRICE
        </p>
        <p className="text-[21px] opacity-80 md:w-[55%] w-[85%] flex flex-col text-white items-center justify-center mx-auto">
          Wherever you are in the world, you can find a server right for you
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-20 gap-4 items-center justify-between w-[70%] mx-auto py-12">
      <Card trial={"FREE Trial"} time={"FREE / 24 Hour"} ra={"1GB"} rb={"Unlimited"} rc={"5GB"} main={"MINECRAFT HOSTING"}/>
      <Card trial={"FREE Trial"} time={"FREE / 24 Hour"} ra={"5GB"} rb={"Unlimited"} rc={"20GB"} main={"RUST HOSTING"}/>
      <Card trial={"STARTING"} time={"$0.50 USD"} ra={"128MB"} rb={"Unlimited"} rc={"512MB"} main={"DISCORD BOT"}/>
      </div>
    </div>
  );
}
