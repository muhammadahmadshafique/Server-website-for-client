import TestimonialCard from "@/components/TestimonialCard";
import React from "react";

export default function Testimonial() {
  return (
    <div className="bg-[#1B2A3D]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-4 pb-[33px]">
        <p className="text-[44px] w-[55%] flex flex-col text-white items-center justify-center mx-auto">
          TESTIMONIALS
        </p>
        <p className="text-[18px] opacity-80 w-[85%] flex  text-white items-center justify-center mx-auto">
          What our clients say about us on <span className='text-[#01A6F5] ml-1 underline'> TrustPilot </span>
        </p>
        <p className="text-[21px] opacity-80 w-[95%] flex text-white items-center justify-center mx-auto">
            WHAT DO YOU THINK  
        </p>
        <p>THE SERVERS?</p> 
        <img src="./above.png" alt="" srcset="" />
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto items-center justify-center gap-x-5">
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      </div>
      <div className='flex items-center justify-center'>
      <img src="./above.png" alt="" srcset="" />
      </div>
      <div className='flex items-center justify-center gap-x-3 py-4'>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
      </div>
    </div>
  );
}
