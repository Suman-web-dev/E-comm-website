// src/ui/button.jsx
import React from "react";

export const Button = ({ children, variant = "default", className, ...props }) => {
  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};