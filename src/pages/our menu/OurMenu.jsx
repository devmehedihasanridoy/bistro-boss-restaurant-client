import React from "react";
import CoverBanner from "../../components/shared/cover banner/CoverBanner";
import { Helmet } from "react-helmet-async";
import useMenu from "../../components/hooks/useMenu";
import MenuCard from "../../components/shared/Card/MenuCard";
import Heading from "../../components/shared/heading/Heading";
import Hero from "../../components/shared/hero/Hero";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
//
const OurMenu = () => {
  const [menuData, isLoading] = useMenu();
  const popularData = menuData.filter(
    (offered) => offered.category === "offered"
  );
  const dessertData = menuData.filter((item) => item.category === "dessert");
  const pizzasData = menuData.filter((item) => item.category === "pizza");
  const saladData = menuData.filter((item) => item.category === "salad");
  const soupData = menuData.filter((item) => item.category === "soup");
  //
  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
      <Helmet>
        <title>OurMenu || bistro boss</title>
      </Helmet>
      <CoverBanner
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
        bgImg={"menuCoverImg"}
      />
      {/* popular items  */}
      <div className="w-11/12 mx-auto py-20">
        <Heading title={"TODAY'S OFFER"} subTitle={"---Don't miss---"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {popularData?.map((menu) => (
            <MenuCard key={menu._id} item={menu} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to={'/shop/popular'}>
            <button className="hover:bg-slate-400 text-xl  font-semibold uppercase border-b-2 rounded-xl px-6 py-3">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </div>

      {/* desserts */}
      <div className=" py-20">
        <Hero
          textColor={"text-white"}
          bgColor={"bg-[#292929cb]"}
          bgImg={"menuCoverImg2"}
          title={"DESSERTS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
          {dessertData?.map((menu) => (
            <MenuCard key={menu._id} item={menu} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/shop/dessert"}>
            <button className="hover:bg-slate-400 text-xl  font-semibold uppercase border-b-2 rounded-xl px-6 py-3">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </div>

      {/* pizzas  */}
      <div className=" py-20 ">
        <Hero
          textColor={"text-white"}
          bgColor={"bg-[#292929cb]"}
          bgImg={"menuCoverImg2"}
          title={"PIZZA"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
          {pizzasData?.map((menu) => (
            <MenuCard key={menu._id} item={menu} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/shop/pizza"}>
            <button className="hover:bg-slate-400 text-xl  font-semibold uppercase border-b-2 rounded-xl px-6 py-3">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </div>
      {/* salad  */}
      <div className=" py-20 ">
        <Hero
          textColor={"text-white"}
          bgColor={"bg-[#292929cb]"}
          bgImg={"menuCoverImg2"}
          title={"SALADS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
          {saladData?.map((menu) => (
            <MenuCard key={menu._id} item={menu} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to="/shop/salad">
            <button className="hover:bg-slate-400 text-xl  font-semibold uppercase border-b-2 rounded-xl px-6 py-3">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </div>
      {/* soup  */}
      <div className=" py-20 ">
        <Hero
          textColor={"text-white"}
          bgColor={"bg-[#292929cb]"}
          bgImg={"menuCoverImg2"}
          title={"SOUP"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
          {soupData?.map((menu) => (
            <MenuCard key={menu._id} item={menu} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to={'/shop/soup'}>
            <button className="hover:bg-slate-400 text-xl  font-semibold uppercase border-b-2 rounded-xl px-6 py-3">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default OurMenu;
