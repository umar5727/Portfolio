
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/Portfolio/" className="group cursor-pointer flex gap-2 items-center">
      {/* <FontAwesomeIcon icon={faBook} className="text-primary text-3xl"  
      />*/}
      
      <h1 className="font-bold text-2xl text-primarydark dark:text-white transition-colors duration-300 group-hover:text-primary"
      >
        Umar
      </h1>
    </Link>
  );
};

export default Logo;