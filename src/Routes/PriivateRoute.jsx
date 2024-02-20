import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Hook/Loader'
import { AuthContext } from '../Provider/AuthProviders';

const PriivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
export default PriivateRoute;
