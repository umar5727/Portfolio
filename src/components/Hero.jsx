// Hero.js

import React from "react";

import Button from "./button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faCss3Alt,
  faFontAwesome,
  faGithub,
  faHtml5,
  faInstagram,
  faLinkedinIn,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import SmallCard from "./cards/SmallCard";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10 lg:h-[calc(100vh-64px)]">
      {/* Left Column */}
      {/* <div className="absolute top-1/2 left-[20%] shadow-[0_0_200px_200px_rgba(0,255,168,0.55)] -z-50"></div> */}
      <div className="lg:w-3/6 flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold  text-primary font-serif lg:mt-9">
          <span className="text-black dark:text-white text-3xl md:text-5xl ">
            Hy! I'm{" "}
          </span>{" "}
          <br />
          <div className="relative pt-2 drop-shadow-[1px_1px_rgba(255,255,255,9.5)]">
            Umar Khan
          </div>
        </h1>
        <p className="text-lg md:text-xl font-bold text-primary dark:!text-lightgray">
          
          A graduate and a certified frontend web developer, I offer web development services using React. I bring ideas to life through the power of
          React.js.
        </p>
        {/* discription ends  */}
        {/* <div className="flex gap-10 ">
          <Button className="px-12 py-3 ">
            <span className="z-50">Download CV</span>
          </Button>
          <Button>
            <span className="z-50">Project Completed</span>
          </Button>
        </div> */}
        {/* social links */}
        <div className="flex gap-10 text-primary lg:mt-16">
          <Link className="duration-500 hover:-translate-y-2">
            <FontAwesomeIcon
              icon={faGithub}
              className=" duration-300 dark:text-white text-5xl dark:hover:text-primary"
            />
          </Link>
          <Link className="duration-500 hover:-translate-y-2">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className=" duration-300 dark:text-white text-5xl dark:hover:text-primary"
            />
          </Link>
          <Link className="duration-500 hover:-translate-y-2 ">
            <FontAwesomeIcon
              icon={faInstagram}
              className=" duration-300 dark:text-white text-5xl dark:hover:text-primary"
            />
          </Link>
        </div>

        {/* <Button>Hire me</Button> */}
      </div>

      {/* Right Column - Full Image */}

      <div className="lg:w-3/6 flex justify-center relative ">
        {/* small cards starts  */}
        <SmallCard
          icon={faReact}
          iconStyle="text-[#00d1f7]"
          className="absolute top-5 -right-10 "
          transition="duration-500 hover:rotate-90"
        />
        <SmallCard
          icon={faHtml5}
          iconStyle="text-yellow-600"
          className="absolute top-10 right-20"
        />
        <SmallCard
          icon={faFontAwesome }
          iconStyle="text-blue-600"
          className="absolute top-40 right-20"
        />
        <SmallCard
          icon={faBootstrap}
          iconStyle="text-purple-600"
          className="absolute top-30 right-40"
        />
        <SmallCard
          icon={faCss3Alt}
          iconStyle="text-blue-600"
          className="absolute top-60 right-20"
        />

        <SmallCard
          image='javascript.svg'
          iconStyle="text-blue-600"
          className="absolute top-40 right-1"
        />
        {/* small cards ends  */}

        <div className="relative  ">
          <figure className=" absolute -left-[16rem] -bottom-[4.5rem] figure -z-50 w-[900px]">
            <img
              src="figure2.svg"
              alt=""
              className="w-full h-full -z-50 relative"
            />
          </figure>
          <img
            src="self1.png"
            alt=""
            className="mainImg w-full h-[550px] z-40 relative rounded-b-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
