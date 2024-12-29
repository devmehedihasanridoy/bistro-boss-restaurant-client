import React from "react";
import CoverBanner from "../../components/shared/cover banner/CoverBanner";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Our shop || bistro boss</title>
      </Helmet>
      <CoverBanner
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?s"}
        bgImg={'menuCoverImg1'}
      />
    </div>
  );
};

export default OurShop;
