import React from "react";

const Button = ({ className="", size="default", children }) => {
  const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-1 focus-visible:cyan-400 bg-cyan-400 text-cyan-50 hover:bg-cyan-400/90 shadow-lg shadow-cyan-400/25";
  const sizeClasses ={
    sm:"px-4 py-2 text-sm",
    default:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
  }

  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
