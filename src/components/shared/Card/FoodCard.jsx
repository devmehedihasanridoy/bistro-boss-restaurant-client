import React from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

//
const FoodCard = ({ item }) => {
  //
  const [, refetch] = useCart();
  //
  const axiosSecure = useAxiosSecure();
  //
  const { _id, price, image, recipe, name } = item || {};
  //
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //
  const handleAddToCart = async () => {
    const cartItem = {
      userEmail: user.email,
      dishes_id: _id,
      name: name,
      price: price,
      image: image,
    };
    if (user && user?.email) {
      try {
        await axiosSecure.post("/addTocart", cartItem);
        refetch();
        toast.success("Item added to cart");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast((t) => (
        <span>
          Please login to add to cart
          <button
            className="px-2 py-1 bg-green-400 rounded-lg mx-2"
            onClick={() => {
              toast.dismiss(t.id);
              navigate("/auth/login", { state: { from: location } });
            }}
          >
            login
          </button>
          <button
            className="px-2 py-1 bg-red-400 rounded-lg"
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </span>
      ));
    }

    console.log(item);
  };
  return (
    <div>
      <img
        className="w-full mx-auto h-72 object-cover rounded-lg"
        src={image}
        alt=""
      />
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl font-semibold text-[#151515] capitalize">
          {name}
        </h2>
        <p className="text-[#151515] font-normal text-base">{recipe}</p>
        {/*  */}
        <button
          onClick={handleAddToCart}
          className="hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
