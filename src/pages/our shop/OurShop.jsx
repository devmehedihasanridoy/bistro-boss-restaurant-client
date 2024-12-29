import React, { useState } from "react";
import CoverBanner from "../../components/shared/cover banner/CoverBanner";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../components/hooks/useMenu";
import FoodCard from "../../components/shared/Card/FoodCard";
import { useParams } from "react-router-dom";
//
const OurShop = () => {
  const [menuData] = useMenu();
//   
const categories = ['salad', 'pizza' , 'soup' , 'dessert' , 'drinks']
const {category}= useParams();
const initialindex = categories.indexOf(category);
const [tabIndex , setTabIndex] = useState(initialindex)

// 

  return (
    <div>
      <Helmet>
        <title>Our shop || bistro boss</title>
      </Helmet>
      <CoverBanner
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?s"}
        bgImg={"menuCoverImg1"}
      />
      {/* tabs */}
      <div className="w-11/12 mx-auto py-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {menuData
                .filter((item) => item.category === "salad")
                .map((item) => (
                  <FoodCard key={item?._id} item={item} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {menuData
                .filter((item) => item.category === "pizza")
                .map((item) => (
                  <FoodCard key={item?._id} item={item} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {menuData
                .filter((item) => item.category === "soup")
                .map((item) => (
                  <FoodCard key={item?._id} item={item} />
                ))}
            </div>
          </TabPanel>
          {/*  */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {menuData
                .filter((item) => item.category === "dessert")
                .map((item) => (
                  <FoodCard key={item?._id} item={item} />
                ))}
            </div>
          </TabPanel>
          {/*  */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {menuData
                .filter((item) => item.category === "drinks")
                .map((item) => (
                  <FoodCard key={item?._id} item={item} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
