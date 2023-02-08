import React from "react";

export default function Location() {
  return (
    <div className="bg-[#13212E]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-4">
        <p className="text-[44px] w-[55%] flex flex-col text-white items-center justify-center mx-auto">
          OUR LOCATION
        </p>
        <p className="text-[21px] opacity-80 w-[55%] flex flex-col text-white items-center justify-center mx-auto">
          Wherever are are in the world, you can find a server right for you.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img src="./map.png" alt="map" srcset="" />
      </div>
    </div>
  );
}
