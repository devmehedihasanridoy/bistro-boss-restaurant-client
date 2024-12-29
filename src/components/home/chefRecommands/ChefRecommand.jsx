import React from "react";
import Heading from "../../shared/heading/Heading";
import cardImg from "../../../assets/home/slide1.jpg";
const ChefRecommand = () => {
  return (
    <div>
      <Heading title={"CHEF RECOMMENDS"} subTitle={"---Should Try---"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        <div>
          <img
            className="w-full mx-auto h-72 object-cover rounded-lg"
            src={cardImg}
            alt=""
          />
          <div className="text-center space-y-3 mt-4">
            <h2 className="text-2xl font-semibold text-[#151515] capitalize">
              Caeser Salad
            </h2>
            <p className="text-[#151515] font-normal text-base">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            {/*  */}
            <button className="hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3">
              Add to Cart
            </button>
          </div>
        </div>
        {/*card-2  */}
        <div>
          <img
            className="w-full mx-auto h-72 object-cover rounded-lg"
            src={cardImg}
            alt=""
          />
          <div className="text-center space-y-3 mt-4">
            <h2 className="text-2xl font-semibold text-[#151515] capitalize">
              Caeser Salad
            </h2>
            <p className="text-[#151515] font-normal text-base">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            {/*  */}
            <button className="hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3">
              Add to Cart
            </button>
          </div>
        </div>
        {/* card-3 */}
        <div>
          <img
            className="w-full mx-auto h-72 object-cover rounded-lg"
            src={cardImg}
            alt=""
          />
          <div className="text-center space-y-3 mt-4">
            <h2 className="text-2xl font-semibold text-[#151515] capitalize">
              Caeser Salad
            </h2>
            <p className="text-[#151515] font-normal text-base">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            {/*  */}
            <button className="hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommand;
