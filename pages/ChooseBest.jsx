import React from "react";

export default function ChooseBest() {
  return (
    <div className="bg-[#1B2A3D] space-y-12 pb-[48px] font-['Poppins]">
      <div className="flex flex-col  text-white items-center justify-center gap-y-2 py-4 pb-[33px]">
        <p className="font-['Radio Canada'] font-normal text-[42px] md:w-[55%] w-[85%] mt-12 md:mt-0 flex flex-col text-white items-center justify-center mx-auto">
          WHY CHOOSE THE BEST?
        </p>
        <p className="text-[21px] font-['Poppins'] font-normal opacity-80 md:w-[55%] w-[85%] flex flex-col text-white items-center justify-center mx-auto">
          Our hosting is specially designed for games, with cheap
          pricing,powerful hardware,DDOs protection and 24/7 support. Start your
          new server today with ServersNow{" "}
        </p>
      </div>
      <div className=" w-[60%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-20 gap-4">
      <div className=" flex flex-col items-center">
        <div className="border  border-[#01A6F5] bg-[#1B2A3D] z-50 mt-[-2.75rem] absolute rounded-full border-dashed w-fit p-3">
          <img className="w-12 h-12" src="./img1.png" alt="" srcset="" />
        </div>
        <div className="border border-[#01A6F5] rounded-[32px] border-dashed w-[190px] text-white px-3 pt-16 pb-2">
          <p className="font-['Poppins'] font-normal text-[14px] whitespace-nowrap py-1">Blazing Fast Hardware</p>
          <p className="opacity-60 py-4 font-['Poppins'] font-normal text-[10px] w-[170px]">
            Expect only the beast and the fastest hardware when purchasing a
            service from us
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="border  border-[#01A6F5] bg-[#1B2A3D] mt-[-2.75rem] absolute rounded-full border-dashed w-fit p-3">
          <img className="w-12 h-12" src="./roket.png" alt="" srcset="" />
        </div>
        <div className="border border-[#01A6F5] rounded-[32px] border-dashed w-[190px] text-white px-3 pt-16 pb-2">
          <p className="font-['Poppins'] font-normal text-[14px] whitespace-nowrap py-1">99.99% Uptime</p>
          <p className="opacity-60 py-4 font-['Poppins'] font-normal text-[10px] w-[170px]">
          We aim to offer a seamless experience with our 99.99% uptime guarantee.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="border  border-[#01A6F5] bg-[#1B2A3D] mt-[-2.75rem] absolute rounded-full border-dashed w-fit p-3">
          <img className="w-12 h-12" src="./earth.png" alt="" srcset="" />
        </div>
        <div className="border border-[#01A6F5] rounded-[32px] border-dashed w-[190px] text-white px-3 pt-16 pb-2">
          <p className="font-['Poppins'] font-normal text-[14px] whitespace-nowrap py-1">Worldwide Network</p>
          <p className="opacity-60 py-4 font-['Poppins'] font-normal text-[10px] w-[170px]">
          Don't let lag ruin the fun, with our worldwide server network, latency will be a thing of the past.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="border  border-[#01A6F5] bg-[#1B2A3D] mt-[-2.75rem] absolute rounded-full border-dashed w-fit p-3">
          <img className="w-12 h-12" src="./money.png" alt="" srcset="" />
        </div>
        <div className="border border-[#01A6F5] rounded-[32px] border-dashed w-[190px] text-white px-3 pt-16 pb-2">
          <p className="font-['Poppins'] font-normal text-[14px]  py-1">24h Money Back Guarantee</p>
          <p className="opacity-60 py-1 font-['Poppins'] font-normal text-[10px] w-[170px]">
          Expect only the best and the fastest hardware when purchasing a service from us.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="border  border-[#01A6F5] bg-[#1B2A3D] mt-[-2.75rem] absolute rounded-full border-dashed w-fit p-3">
          <img className="w-12 h-12" src="./person.png" alt="" srcset="" />
        </div>
        <div className="border border-[#01A6F5] rounded-[32px] border-dashed w-[190px] text-white px-3 pt-16 pb-2">
          <p className="font-['Poppins'] font-normal text-[14px] whitespace-nowrap py-1">24/7 Dedicated Support</p>
          <p className="opacity-60 py-4 font-['Poppins'] font-normal text-[10px] w-[170px]">
          Expect only the best and the fastest hardware when purchasing a service from us.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="border  border-[#01A6F5] bg-[#1B2A3D] mt-[-2.75rem] absolute rounded-full border-dashed w-fit p-3">
          <img className="w-12 h-12" src="./shield.png" alt="" srcset="" />
        </div>
        <div className="border border-[#01A6F5] rounded-[32px] border-dashed w-[190px] text-white px-3 pt-16 pb-2">
          <p className="font-['Poppins'] font-normal text-[14px] whitespace-nowrap py-1">DDOs Protection</p>
          <p className="opacity-60 py-1 font-['Poppins'] font-normal text-[10px] w-[170px]">
          We use top of the line DDos protection to help make sure your server is running smoothly during even the most brutal of attacks.
          </p>
        </div>
      </div>
      </div>
     
      
    </div>
  );
}
