import React from "react";

const FoodCard = ({item}) => {
    const {image , recipe , name} = item ||{}
  return (
    <div>
      <img
        className="w-full mx-auto h-72 object-cover rounded-lg"
        src={image}
        alt=""
      />
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl font-semibold text-[#151515] capitalize">
          { name}
        </h2>
        <p className="text-[#151515] font-normal text-base">
          {recipe}
        </p>
        {/*  */}
        <button className="hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
