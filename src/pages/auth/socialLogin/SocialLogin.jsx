import React from "react";
import useAuth from "../../../components/hooks/useAuth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SocialLogin = () => {
  //
  const axiosPublic = useAxiosPublic();
  //
  const { googleUserSignIn } = useAuth();
  //
  const navigate = useNavigate();
  //  google sign in
  const handleGoogleSignIn = async () => {
    //
    googleUserSignIn()
      .then(async (result) => {
        const userPayload = {
          name: result?.user?.displayName,
          image: result?.user?.photoURL,
          email: result?.user?.email,
          isVerified: result?.user?.emailVerified,
        };

        try {
          await axiosPublic.post(`/addusers`, userPayload);
          toast.success("google sign in success");
        } catch (error) {
          console.error("Error adding user:", error);
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="mt-6 text-center">
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
            <FaFacebook className="text-blue-600 text-xl" />
          </button>
          {/*  */}
          <button
            onClick={() => handleGoogleSignIn()}
            className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200"
          >
            <FaGoogle className="text-red-500 text-xl" />
          </button>
          {/*  */}
          <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
            <FaGithub className="text-gray-800 text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
