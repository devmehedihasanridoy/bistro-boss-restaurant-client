import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../components/hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

//
const Login = () => {
  const { loginUserWithEmailPass, googleUserSignIn } = useAuth();
  //methood 1 using useRef hook
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  //for navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  //
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // captcha validation
  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const userCaptchaValue = e.target.value;

    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //
    loginUserWithEmailPass(email, password)
      .then((result) => {
        toast.success("User Login Successfully");
        navigate(from, {replace:true})
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  //  google sign in
  const handleGoogleSignIn = () => {
    googleUserSignIn()
      .then((result) => {
        toast.success("Google Signin Success");
        navigate(from, {replace:true})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  return (
    <>
    <Helmet>
       <title>Log in || bristro boss</title>
   </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Capcha</span>
              </label>
              <LoadCanvasTemplate />
              {/*  */}
              <input
                type="text"
                // ref={captchaRef}
                name="captcha"
                placeholder="type the capcha"
                className="input input-bordered"
                required
                onBlur={handleValidateCaptcha}
              />
              {/* <button
                className="py-1 w-full mx-auto bg-blue-200 rounded-full mt-3 text-sm font-semibold capitalize "
                onClick={handleValidateCaptcha}
              >
                validate capcha
              </button> */}
            </div>
            {/*  */}
            <button
              disabled={disabled}
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            New here?{" "}
            <Link to="/auth/signup" className="text-orange-500 hover:underline">
              Create a New Account
            </Link>
          </p>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Or sign in with</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
                <FaFacebook className="text-blue-600 text-xl" />
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200"
              >
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

export default Login;
