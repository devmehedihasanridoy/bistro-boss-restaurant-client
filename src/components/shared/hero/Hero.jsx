import React from "react";
import { useLocation } from "react-router-dom";

const Hero = ({ title, subTitle, bgImg, bgColor,textColor }) => {

  // 
  return (
<div className={`${bgImg} mx-auto py-24 `}>
      <div className={`${bgColor} ${textColor} w-11/12 p-20 text-center space-y-5 md:w-9/12 mx-auto`}>
        <h2 className="text-5xl font-medium">{title}</h2>
        {/*  */}
        <p>
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
