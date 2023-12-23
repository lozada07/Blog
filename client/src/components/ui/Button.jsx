import React from "react";

const sizeClasses = {
  small: "w-20",
  medium: "w-52",
  full: "w-full",
};

const Button = ({ value, type, size, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${sizeClasses[size]} px-3 py-2 bg-primary rounded-md text-white font-medium  transitionButton  `}
    >
      {value}
    </button>
  );
};

export default Button;
