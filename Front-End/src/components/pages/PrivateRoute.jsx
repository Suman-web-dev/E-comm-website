// PrivateRoute.js  
import React from "react";  
import { Navigate } from "react-router-dom";  
import { useAuth } from "./AuthContext"; // Adjust the import path if needed  

const PrivateRoute = ({ element }) => {  
  const { currentUser } = useAuth();  

  // Check if the user is logged in and has admin role  
  if (!currentUser || currentUser.role !== "admin") {  
    return <Navigate to="/unauthorized" />; // Redirect to Unauthorized page  
  }  

  return element; // Render the requested component if authorized  
};  

export default PrivateRoute;  