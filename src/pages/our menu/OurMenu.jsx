import React from "react";
import CoverBanner from "../../components/shared/cover banner/CoverBanner";
import { Helmet } from "react-helmet-async";
//
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>OurMenu || bistro boss</title>
      </Helmet>
      <CoverBanner title={"OUR MENU"} subTitle={"Would you like to try a dish?"} bgImg={"menuCoverImg"}
      />
    </div>
  );
};

export default OurMenu;
