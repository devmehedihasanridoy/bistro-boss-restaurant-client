import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Heading from "../../shared/heading/Heading";

//
const Categories = () => {
  return (
    <div>
      <Heading
        title={"ORDER ONLINE"}
        subTitle={"---From 11:00am to 10:00pm---"}
      />
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000, // Slide changes every 3 seconds
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        breakpoints={{
          // Mobile (up to 640px)
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Tablet (641px to 1024px)
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Desktop (1025px and above)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // Larger screens
          1240: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img className="mb-24" src={slide1} alt="" />{" "}
          <h2 className="text-2xl capitalize font-medium -mt-16 ml-6 text-white">
            salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />{" "}
          <h2 className="text-2xl capitalize font-medium -mt-16 ml-6 text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />{" "}
          <h2 className="text-2xl capitalize font-medium -mt-16 ml-6 text-white">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-2xl capitalize font-medium -mt-16 ml-6 text-white">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-2xl capitalize font-medium -mt-16 ml-6 text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
