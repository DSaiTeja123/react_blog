import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform 
        hover:scale-105 hover:shadow-xl hover:bg-opacity-90 
        focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95
        ${bgColor} 
        ${textColor} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
