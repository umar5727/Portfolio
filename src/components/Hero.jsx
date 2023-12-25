// Hero.js

import React from "react";

import Button from "./button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import SmallCard from "./cards/SmallCard";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
      {/* Left Column */}
      <div className="lg:w-3/6 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold  text-primary ">
          <span className="text-black dark:text-white">Hy! I'm </span> <br />
          Umar Khan
        </h1>
        <p className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
        A dedicated React.js Developer with a passion for crafting dynamic and efficient web applications. With a solid foundation in modern JavaScript and a keen eye for creating seamless user experiences, I bring ideas to life through the power of React.js.
        
        </p>
        {/* discription ends  */}
        <div className="flex gap-4 text-primary">
          <Link>
          
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6 dark:text-white" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 dark:text-white" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 dark:text-white" />
          </Link>
          
        </div>

        <Button>Hire me</Button>
      </div>

      {/* Right Column - Full Image */}
      {/* {const image =<FontAwesomeIcon icon={faReact} />} */}
      <div className="lg:w-3/6 flex justify-center relative ">
        <SmallCard icon={faReact} iconStyle='text-primary' className="absolute -right-10" text='React Developer'/>
        <div className="relative  ">
          {/* <figure className=" absolute -left-28 -bottom-12 figure z-0">
            <img
              src="figure.svg"
              alt=""
              className="w-full h-full z-0 relative"
            />
          </figure> */}
          <img
            src="self1.png"
            alt=""
            className="mainImg w-full h-[550px] z-40 relative "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
