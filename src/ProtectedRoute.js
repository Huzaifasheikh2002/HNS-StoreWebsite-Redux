import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const ProtectedRoute = ({children}) => {
  return localStorage.getItem("uid") ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
