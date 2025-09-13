import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/MainContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userdata } = useContext(AppContext);

  if (!userdata) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userdata.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
