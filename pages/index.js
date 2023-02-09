import BestPrice from "./BestPrice";
import ChooseBest from "./ChooseBest";
import FastServices from "./FastServices";
import Footer from "./Footer";
import Location from "./Location";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <ChooseBest />
      <Location />
      <FastServices/>
      <BestPrice/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
