import React from "react";
import H2 from "../heading/H2";
import Card from "./Card";

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
          If you have a project in mind or just want to connect, I'd love to
          hear from you. Let's build something amazing together!
        </p>
        {/* discription ends  */}
      </div>

      {/* Right Column  */}
      <div className="lg:w-full flex justify-center relative ">
        <div className="w-full lg:w-5/6 grid justify-center md: md:grid-cols-3 gap-5 pt-[80px]">
          <Card
            title="Figma to React.js"
            para="I can convert your Figma design or any other design or idea into React.js website."
          />
          <Card
            title="Responsive Design"
            para="All of the websites I create are fully mobile-responsive."
          />
          <Card
            title="Modern Design"
            para="Make your website with Modern touch and colors"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
