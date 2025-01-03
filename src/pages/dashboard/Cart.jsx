import React from "react";
import useCart from "../../components/hooks/useCart";
import { AiTwotoneDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";


const Cart = () => {
  const [cart,refetch] = useCart();
  const cartItems = cart || [];
  const axiosSecure = useAxiosSecure();
  //
  const totalOrders = cart.length;
  //
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
// delete item from cart 
const handleDeleteItem = (id) => {
    toast(
        (t) => (
          <span>
           Are You Sure ? 
             <button className="px-2 py-1 bg-green-400 rounded-lg mx-2" onClick={ async() =>{
                   try{
                     const {data} = await axiosSecure.delete(`/cart/${id}`);
                     if(data.deletedCount === 1){
                        toast.dismiss(t.id);
                       toast.success('Item deleted successfully');
                       refetch();
                     }

                   }catch{

                   }
             }}>Delete</button>
            <button className="px-2 py-1 bg-red-400 rounded-lg" onClick={() => toast.dismiss(t.id)}>Cancle</button>
          </span>
        )
      );
}

  //
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start py-10">
      <div className="w-3/4 bg-white rounded-lg shadow-lg px-6 py-10">
        <h1 className="text-center text-3xl font-bold mb-6">--- My Cart ---</h1>
        <p className="text-center text-xl mb-6">WANNA ADD MORE?</p>

        <div className="flex justify-between items-center mb-4 text-2xl font-medium">
          <p className="font-semibold">Total Orders: {totalOrders}</p>
          <p className="font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            PAY
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-300 text-left">
                <th className="px-4 py-2">INDEX</th>
                <th className="px-4 py-2">ITEM IMAGE</th>
                <th className="px-4 py-2">ITEM NAME</th>
                <th className="px-4 py-2">PRICE</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={item?._id} className="border-t">
                  <td className="px-4 py-2">
                    {idx+ 1}
                  </td>
                  <td className="px-4 py-2">
                     <img className=" w-16 h-16 rounded-md" src={item?.image} alt="" />
                  </td>
                  <td className="px-4 py-2">{item?.name}</td>
                  <td className="px-4 py-2">${item?.price?.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button onClick={()=>handleDeleteItem(item?._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                      <AiTwotoneDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
