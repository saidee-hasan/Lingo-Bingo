// src/components/PrivateRoute.js
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-52">
        {" "}
        <span className="loading loading-dots loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children; // Render children if user is authenticated
  }

  return <Navigate to="/login" />; // Redirect to login if not authenticated
}

export default PrivateRoute;
