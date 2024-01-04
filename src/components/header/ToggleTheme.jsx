import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
 
  const [className,setClassName]=useState()
  const local = JSON.parse(localStorage.getItem("darkTheme"));
  const [theme, setTheme] = useState(local || false);

  const handleClick = () => {
    setTheme(!theme);
    localStorage.setItem("darkTheme", !theme);

  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      setClassName("translate-x-4");
    } else {
      document.documentElement.classList.remove("dark");
      setClassName(" ");
    }
  }, [theme]);  
  return (
    <div
      className="group w-fit h-6 flex  items-center cursor-pointer border-[3px] border-primary p-2px rounded-full relative shadow-[0_0_5px_rgba(255,255,255,0.2)]"
      onClick={handleClick}
    >
      <div
        className={`absolute bg-primary  w-4 h-4 transition duration-200 rounded-full z-50 
       ${className} `}
      ></div>

      <svg
        id="theme-toggle-light-icon"
        className="w-4 h-4 text-primary dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
      </svg>

      <FontAwesomeIcon icon={faMoon} className="w-4 h-4 text-primary :" />
    </div>
  );
};

export default ToggleTheme;
