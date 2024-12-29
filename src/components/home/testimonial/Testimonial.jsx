import React, { useEffect, useState } from "react";
import Heading from "../../shared/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import StarRatings from "react-star-ratings";
import { FaQuoteLeft } from "react-icons/fa";

// 
const Testimonial = () => {
  //
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  //
  return (
    <div>
      <Heading title={"TESTIMONIALS"} subTitle={"---What Our Clients Say---"} />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="space-y-4 px-6 sm:px-20 text-center">
                <StarRatings
                  rating={review?.rating}
                  starRatedColor="#ffd700"
                  starHoverColor="#ffd700"
                  numberOfStars={5}
                  name="rating"
                  starDimension="30px"
                  starSpacing="5px"
                />
                  <p className="flex justify-center items-center my-4"><FaQuoteLeft className="text-5xl " /></p>
                <p className="text-gray-500 text-base">{review?.details}</p>
                <h1 className="uppercase text-[#CD9003] text-2xl font-semibold">
                  {review?.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
