import React, { useEffect, useState } from "react";
import Heading from "../../shared/heading/Heading";
import MenuCard from "../../shared/Card/MenuCard";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
const [menuData] = useMenu();
  //
  return (
    <div>
      {/* heading */}
      <Heading title={"FROM OUR MENU"} subTitle={"---Check it out---"} />
      {/*cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuData.slice(0, 6).map((menu) => (
          <MenuCard key={menu?._id} menu={menu} />
        ))}
      </div>

      <div className="text-center mt-8 ">
        <button className="hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3">
          View full menu
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
