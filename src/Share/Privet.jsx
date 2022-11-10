import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Loading from "./Loading";
// this component is usage to make privet any component that means if user
// is not login then user navigate to login page and when user finish login
//  user go back to previous page
const Privet = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default Privet;
