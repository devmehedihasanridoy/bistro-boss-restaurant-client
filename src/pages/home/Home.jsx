import React from "react";
import Banner from "../../components/home/banner/Banner";
import Navbar from "../../components/shared/navbar/Navbar";
import Categories from "../../components/home/category/Categories";
import OurMenu from "../../components/home/ourMenu/OurMenu";
import CheckItOut from "../../components/home/checkItOut/CheckItOut";
import Heading from "../../components/shared/heading/Heading";
import Testimonial from "../../components/home/testimonial/Testimonial";
import Hero from "../../components/shared/hero/Hero";
import ChefRecommand from "../../components/home/chefRecommands/ChefRecommand";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>home || bistro boss</title>
      </Helmet>
      {/* navbar */}
      <Navbar />
      {/* carosel */}
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
      </div>
      {/* categories items */}
      <div className="w-11/12 mx-auto py-20">
        <Categories />
      </div>
      {/* hero */}
      <div className="">
        <Hero textColor ={"text-[#151515]"} bgColor={"bg-white"} bgImg={'hero_img'} title={'Bistro Boss'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at,nihil iusto ducimus incidunt quibusdam nemo.'} />
      </div>
      {/* our menu */}
      <div className="w-11/12 mx-auto py-20">
        <OurMenu />
      </div>
      {/* call us section */}
      <div className="bg-[#151515] py-24">
        <h1 className=" text-4xl text-white font-normal capitalize text-center">
          Call Us: +88 0192345678910
        </h1>
      </div>
      {/* chef recommand */}
      <div className="w-11/12 mx-auto py-20">
        <ChefRecommand />
      </div>
      {/*check it outs  */}
      <div className="features_img w-full mx-auto bg-fixed">
        <div className="bg-[#28282893] py-24">
          <Heading title={"FROM OUR MENU"} subTitle={"---Check it out---"} />
          <CheckItOut />
        </div>
      </div>
      {/* testimonial */}
      <div className="w-11/12 mx-auto py-20">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
