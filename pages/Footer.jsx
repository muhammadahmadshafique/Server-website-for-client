import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0F1923]">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div>
          <img
            className="w-[90px] h-[90px] object-contain cursor-pointer"
            src="./logo.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex text-[14px] whitespace-nowrap gap-x-10 text-white opacity-70">
          <div>
            <p>SERVICES</p>
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
        <div className="flex gap-x-6 object-contain">
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
