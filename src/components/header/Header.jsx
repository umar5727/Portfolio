import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "../Container";
import ToggleTheme from "./ToggleTheme";
import NavToggle from "./NavToggle";
import NavContext from "../context/navcontext/NavContext";
import Button from "../button/Button";

const Header = () => {
  const { setNavToggle } = useContext(NavContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setNavToggle(false);
    });
  }, []);

  return (
    <header
      id="myClass"
      className=" fixed w-full top-0 left-0 z-50 bg-primary/5 dark:bg-primary-dark/20 backdrop-filter backdrop-blur-[20px] "
    >
      <Container>
        <div className="flex justify-between items-center  h-16  transition-colors duration-200  ">
          <div className="flex gap-8 items-center ">
            <Logo />
            <ToggleTheme />
          </div>
          <Navigation />
          <div className="flex items-center">
            <Button
              className={` flex justify-center items-center  ml-10 rounded-full border-[3px] border-primary dark:text-white hover:text-white  cursor-pointer transition-colors duration-300 md:block md:px-6  md:w-auto md:h-auto md:py-2 `}
            >
              <span className=" relative  md:inline  z-50">
                Hire Me
              </span>
            </Button>
            <NavToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
