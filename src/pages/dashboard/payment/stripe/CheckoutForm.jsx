import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../../components/hooks/useCart";
import axios from "axios";
import useAxiosSecure from "../../../../components/hooks/useAxiosSecure";
import useAuth from "../../../../components/hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
   const {user} = useAuth();
   const navigate = useNavigate()
  //  
  const [transactionId, setTransactionId] = useState('')
  // 
  const stripe = useStripe();
  const elements = useElements();
  // 
  const [clientSecret , setClientSecret] = useState('')
  //
  const [error, setError] = useState("");
  // for stripe
  const  axiosSecure = useAxiosSecure();
  const [cart , refetch] = useCart();
  const totalPrice = cart.reduce((acc ,item) => acc+ item.price,0)
  //
  useEffect(()=>{
       if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
          // console.log(res?.data?.clientSecret);
          setClientSecret(res?.data?.clientSecret);
        })
       }

  },[axiosSecure, totalPrice])


  //  send data to stripe
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("error", error);
      setError(error?.message)
    } else {
      // console.log("PaymentMethod", paymentMethod);
      setError("")
    }
    // 
    const {paymentIntent , error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
       payment_method:{
        card:card,
        billing_details:{
          email:user?.email || "anonymous",
          name:user?.displayName || "anonymous",
        }
       }
    })

    if(confirmError){
      // console.log(confirmError);
    
    }
    else{
      // console.log("payment-intent", paymentIntent);
      if(paymentIntent?.status === "succeeded"){
        setTransactionId(paymentIntent?.id);
        const payment ={
            email:user?.email,
            price:totalPrice,
            date:new Date(),
            cartIds:cart.map(item=> item._id),
            dishes_ids:cart.map(item=> item.dishes_id),
            status:"pending",
            transactionId:paymentIntent?.id,
        }

        const {data} = await axiosSecure.post('/transaction', payment)
        // console.log(data);
        refetch();
        if(data?.transactionResult?.insertedId){
          toast.success(`${totalPrice} $ Payment Successfull`);
          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  //
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
        <p className="text-sm text-red-500 font-sans capitalize mt-3">{error}</p>
        {transactionId && <p className="text-sm text-green-600 font-medium">Your Transection Id : {transactionId}</p>}
      {/*  */}
      <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret}>
         Pay ${totalPrice}
      </button>
    </form>
  );
};

export default CheckoutForm;
