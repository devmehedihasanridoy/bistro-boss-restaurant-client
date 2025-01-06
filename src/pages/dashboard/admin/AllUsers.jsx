import React from "react";
import Heading from "../../../components/shared/heading/Heading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Loader from "../../../components/loader/Loader";

const AllUsers = () => {
  //
  const axiosSecure = useAxiosSecure();

  // Queries
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });
  console.log(users);

  // user delete
  const handleDelete = async (id) => {
    const { data } = await axiosSecure.delete(`/users/${id}`);
    if (data.deletedCount === 1) {
      refetch();
      toast.success("deleted successfully");
      console.log(data);
    } else {
      console.log("error happened on the delete");
    }
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
                    <td
                      className="cursor-pointer"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
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
