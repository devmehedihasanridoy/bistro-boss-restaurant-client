import React, { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useImageUpload = () => {
  // image hosting api key from image bb
  const imageHostingApiKey = import.meta.env.VITE_Imagebb_api;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingApiKey}`;
  //
  const axiosPublic = useAxiosPublic();
  //
  const imageUploadToImagebb = async (imageFile) => {
    //  post request to imagebb host
    const { data } = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
   return data
   
  };

  //
  return [imageUploadToImagebb ];
};

export default useImageUpload;
