import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_base_url,
  withCredentials: true,
});
const useAxiosSecure = () => {
    const {userSignOut} = useAuth()
  // request interseptor to add authprization for every single call to api
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      console.log("token", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  // interseptor for response
  axiosSecure.interceptors.response.use(
    (res) =>{ return res},
    (err) => {
        const status = err.response.status;
        if(status === 401 || status === 403){
            userSignOut()
            navigate("/auth/login")
        }
      
        return Promise.reject(err);  
    }
  );
  //
  return axiosSecure;
};

export default useAxiosSecure;
