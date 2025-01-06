import React from "react";
import Heading from "../../../components/shared/heading/Heading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Loader from "../../../components/loader/Loader";
import { MdDeleteForever } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const AllUsers = () => {
  //
  const axiosSecure = useAxiosSecure();

const {
  data: users,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const { data } = await axiosSecure.get("/users");
    return data;
  },
});


  // user delete
  const handleRoleAdmin = async (id) => {
    toast((t) => (
      <span>
        Upadate User Role ?
        <button
          className="px-3 py-[2px] bg-orange-400 rounded-xl mx-2"
          onClick={async () => {
            await axiosSecure.patch(`/users/admin/${id}`);
            refetch();
             toast.dismiss(t.id);
            toast.success("Role Update Success Fully");
          }}
        >
          Yes
        </button>
        <button
          className="px-3 py-[2px] bg-red-400 rounded-xl"
          onClick={() => toast.dismiss(t.id)}
        >
          Dismiss
        </button>
      </span>
    ));
  };

  // user delete
  const handleDelete = async (id) => {
    toast((t) => (
      <span>
        Are YoU Sure ?
        <button
          className="px-3 py-[2px] bg-green-400 rounded-xl mx-2"
          onClick={async () => {
            const { data } = await axiosSecure.delete(`/users/${id}`);
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
  };

  //
  return (
    <div>
      <Heading subTitle={"----- How Many?? -----"} title={"Manage All Users"} />
      <div>
        <h2 className="text-xl font-medium font-serif mb-4">
          Total Users : ({users?.length}){" "}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Is Verified</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {users?.map((user, idx) => (
                  <tr key={user._id} className="bg-base-200">
                    <th>{idx + 1}</th>
                    <th>{user?.name}</th>
                    <td>{user?.email}</td>
                    <td>{user?.isVerified ? "YES" : "NO"}</td>
                    <td>
                      <button
                        className="cursor-pointer text-green-500 font-semibold text-xl"
                        onClick={() => handleRoleAdmin(user._id)}
                      >
                        {user?.role=== "admin" ?<span className="text-sm font-medium">Admin</span>: <CiUser />}
                      </button>
                    </td>
                    <td>
                      <button
                        className="cursor-pointer text-red-500 text-xl"
                        onClick={() => handleDelete(user._id)}
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

export default AllUsers;
