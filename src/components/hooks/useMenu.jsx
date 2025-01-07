import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  //

  const { data: menuData = [], isLoading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      try {
        const { data } = await axiosPublic('/dishes');
        return data;
      } catch (err) {
        console.error("Error fetching menu data:", err);
        throw err; // Throw the error to trigger query failure state
      }
    }
  });

  return [menuData , isLoading , refetch];
};

export default useMenu;
