import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0F1923] font-['Poppins]">
      <div className="flex flex-col md:flex-row md:w-[85%] mx-auto items-center flex-wrap justify-between py-3">
        <div>
          <img
            className="w-[90px] h-[90px] object-contain cursor-pointer"
            src="./logo.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex overflow-x-hidden text-[9px] py-2 md:text-[14px] gap-x-3 text-white opacity-70">
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
          <img className="w-8 h-8"  src="./facebook.png" alt="" srcset="" />
          <img className="w-8 h-8" src="./tweet.png" alt="" srcset="" />
          <div className="bg-[#01A6F5] flex items-center justify-center rounded-full w-8 h-8">
          <img className=" rounded-full w-6 h-6 object-contain" src="./in.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
