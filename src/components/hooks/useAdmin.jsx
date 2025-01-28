import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
       const {user} = useAuth();
       const axiosSecure = useAxiosSecure();
    //    
        const {data:isAdmin , isLoading} = useQuery({
            queryKey:[user?.email , "isAdmin"],
            enabled:!!user?.email,
            queryFn:async()=>{
             const {data} = await axiosSecure(`/users/admin/${user?.email}`);
             return data
            }
        })
    return [isAdmin,isLoading]
};

export default useAdmin;