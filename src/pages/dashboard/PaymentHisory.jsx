import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import useAuth from "../../components/hooks/useAuth";
import Heading from "../../components/shared/heading/Heading";
import { useQuery } from "@tanstack/react-query";

const PaymentHisory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payment-history/${user?.email}`);
      return data;
    },
  });

  return (
    <div>
      <Heading title={"PAYMENT HISTORY"} subTitle={"---At a Glance!---"} />
      <div className="flex justify-between items-center mb-4 text-2xl font-medium">
        <p className="font-semibold">Total Orders: {paymentHistory?.length}</p>
      </div>
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-300 text-left">
              <th className="px-4 py-2">EMAIL</th>
              {/* <th className="px-4 py-2">CATEGORY</th> */}
              <th className="px-4 py-2">TOTAL PRICE</th>
              <th className="px-4 py-2">PAYMENT DATE</th>
              <th className="px-4 py-2">TRANSACTION ID</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((item, idx) => (
              <tr key={item?._id} className="border-t">
                <td className="px-4 py-2">{item?.email}</td>
                <td className="px-4 py-2">{item?.price} $</td>
                <td className="px-4 py-2">{item?.date}</td>
                <td className="px-4 py-2">{item?.transactionId || "Not Found"}</td>
                {/* <td className="px-4 py-2">
                               <button
                                 onClick={() => handleDeleteItem(item?._id)}
                                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                               >
                                 <AiTwotoneDelete className="text-xl" />
                               </button>
                             </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHisory;
