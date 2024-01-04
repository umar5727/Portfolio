import React from "react";

const Button = ({
  type = "button",
  children = "button",
  className = "hover:text-white",
  ...props
}) => {
  return (
    <button
      type={type}
      className={` text-primary flex items-center justify-center py-2 px-6 rounded-full transition-colors duration-300 ease-in-out border border-primary hover:text-white dark:text-white font-bold ${className}  relative overflow-hidden before:w-0 before:h-full before:bg-primary before:block before:absolute before:top-0 before:left-0 before:duration-500 before:hover:w-full before:-z-10`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
