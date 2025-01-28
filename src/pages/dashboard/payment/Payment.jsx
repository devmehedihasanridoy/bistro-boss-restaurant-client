import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import CheckoutForm from "./stripe/CheckoutForm";
import Heading from "../../../components/shared/heading/Heading";
import useAuth from "../../../components/hooks/useAuth";
import useCart from "../../../components/hooks/useCart";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_pk);
//
const Payment = () => {
  const [isStripe, setIsStripe] = useState("stripe");
  const {user} = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((price, items)=> price + items.price, 0);
  const axiosSecure = useAxiosSecure();
// pay request by ssl commerce
const handlePayUsingSsl=async()=>{
 
 const payment ={
      email:user?.email,
      price:totalPrice,
      transactionId:"",
      date: new Date().toLocaleDateString(),
      cartIds:cart.map(item=>item?._id),
      menuItemsIds:cart.map(item=>item?.dishes_id),
      status:"pending",
    }
    // console.log(payment);
  //  
  const res = await axiosSecure.post('/create-ssl-payment', payment);
  // console.log(res);
  if(res.data?.gatewayUrl){
    window.location.replace(res.data?.gatewayUrl)
   }
// 
}




// 
  return (
    <>
      <Heading title={"Payment"} subTitle={"Want to eat ?"}/>
      <select defaultValue={"stripe"} className="bg-gray-100 px-6 py-2 rounded-lg text-gray-400 font-medium mb-10 focus:none" onClick={(e)=>setIsStripe(e.target.value)}>
          <option value="stripe">Stripe</option>
          <option value="ssl">SSL Commerce</option>
      </select>
       {isStripe === "stripe"?
        <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>:
      <>
        <div>
           <h1 className="text-4xl capitalize text-gray-700 mb-2">Payment details</h1>
           <h4 className="text-xl capitalize text-gray-600 mb-4">give payment details for payment</h4>
           <div className="flex flex-col items-start ">
              <label className="text-gray-500 font-semibold mb-2">Email</label>
             <input defaultValue={"mehedihasan645356@gmail.com"} type="email" readOnly className="w-full px-4 bg-white border-2 border-cyan-500 rounded-md py-2  text-gray-500 "></input>
             <button type="button" onClick={handlePayUsingSsl} className="text-xl font-medium border border-cyan-600 px-6 py-2 rounded-md mt-2 text-gray-600">Pay</button>
           </div>
        </div>
      </>
       }
    </>
  );
};

export default Payment;
