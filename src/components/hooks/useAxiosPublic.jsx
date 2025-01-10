import React from 'react';
import axios from 'axios'


const axiosPublic = axios.create({
    baseURL:'https://bistro-boss-server-hazel-three.vercel.app',
    headers: {
        'Content-Type': 'application/json',
    },
})

// 
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;