import React from "react";

export default function Location() {
  return (
    <div className="bg-[#13212E] font-['Poppins]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-4">
        <p className="text-[44px] md:w-[55%] w-[85%] flex flex-col font-['Radio Canada'] font-normal text-[42px] text-white items-center justify-center mx-auto">
          OUR LOCATION
        </p>
        <p className="text-[21px] opacity-80 md:w-[55%] w-[85%] font-['Poppins'] font-normal text-[22px] flex flex-col text-white items-center justify-center mx-auto">
          Wherever are are in the world, you can find a server right for you.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img src="./pins.png" alt="map" srcset="" />
      </div>
    </div>
  );
}
