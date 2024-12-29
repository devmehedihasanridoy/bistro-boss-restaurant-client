import React from "react";
import Navbar from "../navbar/Navbar";

const CoverBanner = ({ title, subTitle, bgImg }) => {
  return (
    <div className={`${bgImg} `}>
      <Navbar />
      <div className="pt-40 pb-20 text-center space-y-4">
        <div className="bg-[#2c20218e] py-24 w-11/12 mx-auto space-y-4">
          <h1 className=" text-white text-7xl font-bold capitalize text-center">
            {title}
          </h1>
          <p className="text-2xl font-semibold text-white">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
