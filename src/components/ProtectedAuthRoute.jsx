import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/MainContext";

const ProtectedAuthRoute = ({ children }) => {
  const { userdata } = useContext(AppContext);

  // If user is already logged in, redirect based on role
  if (userdata) {
    if (userdata.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else if (userdata.role === "vet" || userdata.role === "shelter") {
      return <Navigate to="/profile" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedAuthRoute;