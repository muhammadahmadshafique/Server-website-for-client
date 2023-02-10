import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0F1923] font-['Poppins'] font-normal">
      <div className="flex flex-row md:flex-row w-[80%] md:w-[85%] mx-auto items-center flex-wrap justify-between py-3">
        <div>
          <img
            className="w-[90px] h-[90px] object-contain cursor-pointer"
            src="./logo.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="md:flex hidden grid grid-cols-3 gap-12 overflow-x-hidden text-[9px] py-2 md:text-[14px] md:gap-x-12 text-white opacity-70">
          <div>
            <p className="font-['Poppins]">SERVICES</p>
            <p>RUST SERVER</p>
            <p>MINECRAFT SERVER</p>
          </div>
          <div>
            <p></p>
            <p>DISCORD BOT</p>
            <p>WEB HOSTING</p>
          </div>
          <div>
            <p>SUPPORT</p>
            <p>CONTACT US</p>
            <p>HELP CENTER</p>
          </div>
          <div>
            <p></p>
            <p>SUPPORT TICKET</p>
            <p> </p>
          </div>
          <div>
            <p>SUPPORT</p>
            <p>TERMS OF SERVICE</p>
            <p>PRIVACY POLICY</p>
          </div>
        </div>
        <div className="flex gap-x-6 object-contain mt-6 lg:mt-0">
          <img className="w-8 h-8" src="./facebook.png" alt="" srcset="" />
          <img className="w-8 h-8" src="./tweet.png" alt="" srcset="" />
          <div className="bg-[#01A6F5] flex items-center justify-center rounded-full w-8 h-8">
            <img
              className=" rounded-full w-6 h-6 object-contain"
              src="./in.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
       
      </div>
      <div className="font-['Poppins] cursor-pointer py-4 grid grid-cols-2 gap-x-2 text-white w-[75%] mx-auto  md:hidden">

          <div className="space-y-2">
            <p className="font-['Poppins]">SERVICES</p>
            <p>DISCORD BOT</p>
            <p>WEB HOSTING</p>
            <p>SUPPORT</p>
            <p>RUST SERVER</p>
            <p>CONTACT US</p>
          </div>
          <div className="space-y-4 ml-4 whitespace-nowrap">
            <p>HELP CENTER</p>
            <p>SUPPORT TICKET</p>
            <p>TERMS OF SERVICE</p>
            <p>MINECRAFT SERVER</p>
            <p>PRIVACY POLICY</p>
          </div>
        </div>
    </div>
  );
}
