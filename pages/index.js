import BestPrice from "./BestPrice";
import ChooseBest from "./ChooseBest";
import FastServices from "./FastServices";
import Footer from "./Footer";
import Location from "./Location";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import React, { useRef, useState } from "react";
import { Carousel } from "flowbite-react";
import { BeakerIcon } from "@heroicons/react/24/solid";
// import { Carousel } from 'flowbite';

export default function Home() {
  const [ham, setHam] = useState(false);
  return (
    <div className="bg-[#0F1923]">
      <div
        onClick={() => setHam(!ham)}
        className="md:hidden z-[100] cursor-pointer absolute right-6 top-8 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          color="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="">
        <Carousel
          leftControl={<img src="./left.png" alt="" srcset="" />}
          rightControl={<img src="./right.png" alt="" srcset="" />}
          indicators={false}
          className="h-fit"
        >
          <Navbar ham={ham} />
          <Navbar ham={ham} />
          <Navbar ham={ham} />
        </Carousel>
      </div>
      <ChooseBest />
      <Location />
      <FastServices />
      <BestPrice />
      <div className="">
        <Carousel
          leftControl="."
          rightControl="."
          indicators={false}
          className="h-fit"
        >
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Carousel>
      </div>
      <Footer />
      <></>
    </div>
  );
}
