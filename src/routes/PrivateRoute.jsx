// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user,loading } = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-dots loading-lg text-center"></span>
  }
  if (user) {
    return children; // Render children if user is authenticated
  }
  
  return <Navigate to="/login" />; // Redirect to login if not authenticated
}

export default PrivateRoute;