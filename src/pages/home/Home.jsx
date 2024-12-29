import React from "react";
import Banner from "../../components/home/banner/Banner";
import Navbar from "../../components/shared/navbar/Navbar";
import Categories from "../../components/home/category/Categories";
import OurMenu from "../../components/home/ourMenu/OurMenu";
import CheckItOut from "../../components/home/checkItOut/CheckItOut";
import Heading from "../../components/shared/heading/Heading";
import Testimonial from "../../components/home/testimonial/Testimonial";
import Hero from "../../components/home/hero/Hero";
import ChefRecommand from "../../components/home/chefRecommands/ChefRecommand";

const Home = () => {
  
  return (
    <div>
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
      <div className="hero_img w-11/12 mx-auto py-24">
        <Hero />
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
          <ChefRecommand/>
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
