import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {
    const {user} = useAuth();
    // 
    const axiosSecure = useAxiosSecure();
      // Queries
    const {refetch , data: cart=[]} = useQuery({queryKey: ['cart' , user?.email], queryFn: async () => {
         const {data} =  await axiosSecure.get(`/cart?userEmail=${user?.email}`);
        return data;
    }})
    return [cart , refetch]
   
};

export default useCart;