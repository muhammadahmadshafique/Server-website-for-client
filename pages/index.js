import BestPrice from "./BestPrice";
import ChooseBest from "./ChooseBest";
import FastServices from "./FastServices";
import Footer from "./Footer";
import Location from "./Location";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import React, { useRef, useState } from "react";
import { Carousel } from "flowbite-react";
// import { Carousel } from 'flowbite';

export default function Home() {
  return (
    <div className="bg-[#0F1923]">
      <div className="">
        <Carousel
          leftControl={<img src="./left.png" alt="" srcset="" />}
          rightControl={<img src="./right.png" alt="" srcset="" />}
          indicators={false}
          className="h-fit"
        >
          <Navbar />
          <Navbar />
          <Navbar />
        </Carousel>
      </div>
      <ChooseBest />
      <Location />
      <FastServices />
      <BestPrice />
      <div className="">
        <Carousel
          leftControl='.'
          rightControl='.'
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
