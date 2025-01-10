import React from 'react';
import useAuth from '../components/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../components/hooks/useAdmin';
import Loader from '../components/loader/Loader';

const AdminPrivate = ({children}) => {
    
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isLoading] = useAdmin();
    

    if(loading || isLoading){
        return <Loader/>
    }
    if(user && isAdmin?.admin){
        return children;
    }

    return <Navigate to="/auth/login" state={{from : location}} replace></Navigate>


};

export default AdminPrivate;