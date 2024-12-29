import React from 'react';

const Banner = ({title, bgImg}) => {
    return (
        <div className={`${bgImg}`}>
        <h1 className=" text-4xl text-white font-normal capitalize text-center">
          {title}
        </h1>
      </div>
    );
};

export default Banner;