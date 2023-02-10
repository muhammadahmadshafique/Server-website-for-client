import TestimonialCard from "@/components/TestimonialCard";
import React from "react";

export default function Testimonial() {
  return (
    <div className="bg-[#1B2A3D] font-['Poppins]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-4 pb-[33px]">
        <p className="font-['Radio Canada'] font-normal text-[42px] w-[55%] flex flex-col text-white items-center justify-center mx-auto">
          TESTIMONIALS
        </p>
        <p className="font-['Poppins'] w-[100%] font-normal md:text-[22px] md:text-[18px] opacity-80 md:w-[85%] flex text-white items-center justify-center mx-auto">
          What our clients say about us on{" "}
          <span className="text-[#01A6F5] ml-1 underline font-['Poppins'] font-normal text-[16px] md:text-[22px]">
            {" "}
            TrustPilot{" "}
          </span>
        </p>
        <p className="font-['Radio Canada'] font-normal text-[32px] opacity-80 w-[95%] flex text-white items-center justify-center mx-auto">
          WHAT DO YOU THINK
        </p>
        <p className="font-['Radio Canada'] font-normal text-[32px]">
          THE SERVERS?
        </p>
        <img src="./above.png" alt="" srcset="" />
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto items-center justify-center gap-x-5">
        <TestimonialCard img={"./men.png"} name={"John Coastal"} />
        <TestimonialCard img={"./secc.png"} name={"Nike Star"}/>
        <TestimonialCard img={"./men1.png"} name={"Solaman Stark"}/>
        <TestimonialCard img={"./men2.png"} name={"John Smith"}/>
        <TestimonialCard img={"./men.png"} name={"John Coastal"} />
        <TestimonialCard img={"./secc.png"} name={"Nike Star"}/>
        <TestimonialCard img={"./men1.png"} name={"Solaman Stark"}/>
        <TestimonialCard img={"./men2.png"} name={"John Smith"}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="./above.png" alt="" srcset="" />
      </div>
      <div className="flex items-center justify-center gap-x-3 py-4">
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0F1923] border border-[#01A6F5]"></div>
      </div>
    </div>
  );
}
