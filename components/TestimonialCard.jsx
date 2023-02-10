import React from "react";

export default function TestimonialCard({img,name}) {
  return (
    <div className="py-12">
      <div className=" border bg-[#0F1923] relative border-[#01A6F5] p-6 w-fit flex flex-col items-center justify-center rounded-tl-3xl rounded-br-3xl">
        <img className="w-16 h-16 absolute top-[-40px]" src={img} alt="" srcset="" />
        <div className='flex flex-col items-center  justify-center w-[239px]'>
          <p className="text-[#01A6F5] font-['El Messiri'] font-normal text-[19px]">{name}</p>

          <blockquote class="">
            <p className="text-white opacity-90 px-4 opacity-60 py-2 font-['El Messiri'] font-normal text-[18px] w-[114%]">
              “Good layout, professional and  educational material and good
              follow-up in the form of homework and tests “
            </p>
          </blockquote>
          <div className='flex bg-[#0F1923] border absolute bottom-[-20px] border-[#01A6F5] rounded-full px-3 py-2 gap-x-2'>
            <img className="w-[15px] h[8px]" src="./star.png" alt="" srcset="" />
            <img className="w-[15px] h[8px]" src="./star.png" alt="" srcset="" />
            <img className="w-[15px] h[8px]" src="./star.png" alt="" srcset="" />
            <img className="w-[15px] h[8px]" src="./star.png" alt="" srcset="" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
