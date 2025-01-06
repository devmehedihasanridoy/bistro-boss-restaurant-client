import React from 'react';
import useAuth from '../components/hooks/useAuth';
import Loader from '../components/loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
       
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loader/>
    }
    if(user){
        return children;
    }

    return <Navigate to="/auth/login" state={{from : location}} replace></Navigate>

};
export default PrivateRoute;