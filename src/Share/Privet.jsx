import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthenticationContext } from '../../AuthContext/AuthContext';

const Privet = ({children}) => {
    const {user,loading} = useContext(AuthenticationContext)
    const location = useLocation()
    if(loading){
        return <h2 className='text-5xl'>Loading ...</h2>
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default Privet;