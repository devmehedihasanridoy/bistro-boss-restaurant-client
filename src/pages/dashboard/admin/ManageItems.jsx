import React from "react";
import useMenu from "../../../components/hooks/useMenu";
import { MdDeleteForever } from "react-icons/md";
import Loader from "../../../components/loader/Loader";
import { CiSaveUp1 } from "react-icons/ci";
import Heading from "../../../components/shared/heading/Heading";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageItems = () => {
  //
  const axiosSecure = useAxiosSecure();
  //
  const [menuData, isLoading, refetch] = useMenu();
  //

  const handleDelete = async (id) => {
    toast((t) => (
        <span>
          Are YoU Sure ?
          <button
            className="px-3 py-[2px] bg-green-400 rounded-xl mx-2"
            onClick={async () => {
                const {data} = await axiosSecure.delete(`/menu/${id}`);
              if (data.deletedCount === 1) {
                 refetch();
                 toast.dismiss(t.id);
                toast.success("deleted successfully");
              } else {
                console.log("error happened on the delete");
              }
            }}
          >
            Delete
          </button>
          <button
            className="px-3 py-[2px] bg-red-400 rounded-xl"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancle
          </button>
        </span>
      ));
    }
    
  //
  return (
    <div>
      <Heading subTitle={"----- Hurry Up! -----"} title={"Manage All Items"} />
      <div>
        <h2 className="text-xl font-medium font-serif mb-4">
          Total Menu : ({menuData?.length}){" "}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Index</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {menuData?.map((menu, idx) => (
                  <tr key={menu._id} className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>
                      <img
                        className="w-16 h-12"
                        src={menu?.image}
                        alt={menu?.name}
                      />
                    </td>
                    <td>{menu?.name}</td>
                    <td>{menu?.price} $</td>
                    <td>
                      <Link
                        to={`/dashboard/manage-items/update/${menu?._id}`}
                        state={{ menu }}
                      >
                        <button className="cursor-pointer text-green-500 font-semibold text-xl">
                          <CiSaveUp1 />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="cursor-pointer text-red-500 text-xl"
                        onClick={() => handleDelete(menu._id)}
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
