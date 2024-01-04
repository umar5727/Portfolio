import React from "react";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link
      to="/Portfolio/"
      className="group cursor-pointer flex gap-2 items-center  rounded-full transition-colors duration-300  "
    >
      <h2 className=" text-3xl text-primary transition-colors duration-300 dark:text-primary font-extrabold font-serif bg-transparent dark:drop-shadow-[-1px_-1px_0px_white]">
        UK
      </h2>
    </Link>
  );
};

export default Logo;
