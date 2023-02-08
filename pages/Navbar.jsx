import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[url('../public/bigimg.png')]">
      <div className="flex items-center text-[14px] justify-between w-[90%] mx-auto">
        <div className="flex whitespace-nowrap items-center gap-x-6">
          <img
            className="w-[90px] h-[90px] object-contain cursor-pointer"
            src="./logo.png"
            alt=""
            srcset=""
          />
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"]'>GAME SERVER</span>
            <img
              className="text-black object-contain cursor-pointer"
              src="./arrow.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"] cursor-pointer'>
              WEB HOSTING
            </span>
          </div>
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"] cursor-pointer'>
              MORE HOSTING
            </span>
            <img
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex gap-x-2">
            <img
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <button className="border border-white flex items-center justify-center px-2 py-1 text-[14px] rounded-md	gap-x-2">
            <span className='text-white font-["Poppins"]'>LOGIN</span>
            <img
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
          </button>
          <button className="border border-white flex items-center justify-center px-2 py-1 text-[14px] rounded-md	gap-x-2">
            <span className='text-white font-["Poppins"]'>Get SUPPORT</span>
          </button>
          <button className="border border-white flex items-center justify-center px-2 py-1 text-[14px] gap-x-2 rounded-full bg-[#13212E]">
            <img
              className="text-black object-contain"
              src="./basket.png"
              alt=""
              srcset=""
            />{" "}
          </button>
        </div>
      </div>

      <div className="space-y-3 w-[78%] mx-auto">
        <p className="text-[44px] text-white">
          <span className="text-[#01A6F5]">DISCORD BOT</span> SEARVER
        </p>
        <p className="text-[24px] text-white">
          SERVERS FROM ONLY <span className="text-[#01A6F5]">$1.0</span>
        </p>
        <p className="w-[31rem] text-white">
          Once you add Discord bots, you can use the bot commands right from
          your server. All of these best bots for Discord are free to use.
        </p>
        <div className="relative">
          <button className="text-white  bg-[#01A6F5] ml-1 mt-1 px-4 py-1 border border-none">
            Order Now
          </button>
          <div className="absolute top-0 left-0  border border-t-white border-l-white border-r-0 border-b-0 w-[30px] h-[30px]"></div>
          <div className="absolute top-[10px] left-[88px]  border border-b-white border-r-white border-l-0 border-t-0 w-[30px] h-[30px]"></div>
        </div>
      </div>

      <div className="flex w-[90%] mx-auto gap-x-10 mt-[89px]">
      <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg pb-6">
        <p className="text-[16px] text-white">MORE HOSTING-START AT</p>
        <p className="text-[11px] text-white opacity-[0.67]">
          simply dummy text of the printing <br /> and typesetting industry
        </p>

        <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
          <span className="text-[11px] text-white">1.0$</span>
          <p className="text-[11px] text-white">Month</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg pb-6">
        <p className="text-[16px] text-white">MORE HOSTING-START AT</p>
        <p className="text-[11px] text-white opacity-[0.67]">
          simply dummy text of the printing <br /> and typesetting industry
        </p>

        <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
          <span className="text-[11px] text-white">1.0$</span>
          <p className="text-[11px] text-white">Month</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-7 py-12 mb-12 mt-[-37px] rounded-[1.5rem] border-b-[12px] ">
        <p className="text-[16px] text-white">MORE HOSTING-START AT</p>
        <p className="text-[11px] text-white opacity-[0.67]">
          simply dummy text of the printing <br /> and typesetting industry
        </p>

        <div className="flex flex-col border border-[#5A5B5B] bg-[#01A6F5] rounded-full w-[55px] h-[55px] items-center justify-center shadow-lg shadow-cyan-500/50  ">
          <span className="text-[11px] text-white ">7.50$</span>
          <p className="text-[11px] text-white">Month</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg pb-6">
        <p className="text-[16px] text-white">MORE HOSTING-START AT</p>
        <p className="text-[11px] text-white opacity-[0.67]">
          simply dummy text of the printing <br /> and typesetting industry
        </p>

        <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
          <span className="text-[11px] text-white">1.0$</span>
          <p className="text-[11px] text-white">Month</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg  pb-6">
        <p className="text-[16px] text-white">MORE HOSTING-START AT</p>
        <p className="text-[11px] text-white opacity-[0.67]">
          simply dummy text of the printing <br /> and typesetting industry
        </p>

        <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
          <span className="text-[11px] text-white">1.0$</span>
          <p className="text-[11px] text-white">Month</p>
        </div>
      </div>
      </div>
    </nav>
  );
}
