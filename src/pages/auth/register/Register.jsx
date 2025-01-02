import React from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Register = () => {
  const { updateUser, signUpUserUsingEmailPass, googleUserSignIn } =useAuth();
  // 
  const navigate = useNavigate();
//    
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  //
  const onSubmit = (data) => {

    //
     signUpUserUsingEmailPass(data?.email, data?.password)
      .then((result) => {
        toast.success("User Signup Successfully");
        navigate("/dashboard")
        //update user info
        updateUser(data?.name , data?.photoURL)
        .then(()=>{

        }).catch(()=>{
           
        })
      })
      .catch((err) => {
        toast.error(err.message)
      });
  }













//   no need to do like that
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     //
//      signUpUserUsingEmailPass(email, password)
//       .then((result) => {
//         alert("user signup success");
//         console.log(result);

//         updateUserName(name)
//         .then(result=>{
//             console.log(result);

//         }).catch(err=>{
//             console.log(err);
//         })
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  //  google sign in
  const handleGoogleSignIn = () => {
    googleUserSignIn()
      .then((result) => {
        toast.success("google sign in success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  return (
   <>
   <Helmet>
       <title>Sign Up || bristro boss</title>
   </Helmet>
       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            name="name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            {...register("email",{required:true})}
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"/>
             {errors.email && <span>Email is required</span>}

             <input
            type="url"
            placeholder="Photo url"
            {...register("photoURL",{required:true})}
           name="photoURL"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
            {errors.photoURL?.type === "required" && <span>Photo url is required</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password",{required:true, minLength:6, maxLength:20 ,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/})}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
            {errors.password?.type === "required" && <span>password is required</span>}
           {errors.password?.type === "minLength" && <span>password must be 6 - 20 char</span>}
           {errors.password?.type === "pattern" && <span>password must a upper a lower and 6 character</span>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already registered?{" "}
          <Link to="/auth/login" className="text-orange-500 hover:underline">
            Go to log in
          </Link>
        </p>
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Or sign up with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
              <FaFacebook className="text-blue-600 text-xl" />
            </button>
            <button onClick={handleGoogleSignIn} className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
              <FaGoogle className="text-red-500 text-xl" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
              <FaGithub className="text-gray-800 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Register;
