import React from "react";
import H2 from "../heading/H2";
import Button from "../button/Button";
import { Link } from "react-scroll";

const Services = () => {
  // complex design
  // figma to react website
  //ui ux design
  return (
    <section
      id="services"
      className="flex flex-col gap-6  pt-14 lg:h-[100vh] text-center"
    >
      {/* Left Column */}
      <div className="lg:w-full lg:text-center py-8  flex flex-col gap-8 justify-center items-center text-center  lg:items-center md:py-0">
        <H2 className="text-4xl md:text-6xl font-bold  text-primary ">
          <span className="text-black text-3xl md:text-5xl dark:text-white">            
            My Awesome
          </span>
          
          <span className="text-primary"> Services</span>
        </H2>
        <p className="text-lg  md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
          Feel free to explore my portfolio to see more of my work. If you have
          a project in mind or just want to connect, I'd love to hear from you.
          Let's build something amazing together!
        </p>
        {/* discription ends  */}

        
      </div>

      {/* Right Column  */}
      <div className="lg:w-2/5 flex justify-center relative ">
        <div className="relative  "></div>
      </div>
    </section>
  );
};

export default Services;
