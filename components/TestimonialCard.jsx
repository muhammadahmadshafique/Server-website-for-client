import React from "react";

export default function TestimonialCard() {
  return (
    <div className="py-12">
      <div className=" border relative border-[#01A6F5] p-6 w-fit flex flex-col items-center justify-center rounded-tl-3xl rounded-br-3xl">
        <img className="w-16 h-16 absolute top-[-40px]" src="./men.png" alt="" srcset="" />
        <div className='flex flex-col items-center  justify-center w-[209px]'>
          <p className="text-[#01A6F5]">John Coastal</p>

          <blockquote class="text-xl italic font-semibold text-white dark:text-white">
            <p className="text-white opacity-90 text-[12px] font-thin w-[114%]">
              “Good layout, professional and  educational material and good
              follow-up in the form of homework and tests “
            </p>
          </blockquote>
          <div className='flex border absolute bottom-[-20px] border-[#01A6F5] rounded-full px-3 py-2 gap-x-2'>
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
