import React, { useState } from "react";

import Button from "../../button/Button";

const Tabs = () => {
  const [tabState, setTabState] = useState(0);
  const skills = [
    {
      title: "Frontend",
      content: [
        { name: "React.js", experties: "75" },
        { name: "JavaScript", experties: "76" },
        { name: "Tailwind CSS", experties: "85" },
        { name: "HTML5", experties: "95" },
        { name: "CSS3", experties: "86" },
        { name: "Bootstrap5", experties: "70" },
      ],
    },
    {
      title: "Backend",
      content: [
        { name: "Nood.js", experties: "60" },
        { name: "Express.js", experties: "65" },
      ],
    },
    {
      title: "Tools",
      content: [
        { name: "Git & GitHub", experties: "85" },
        { name: "Visual Studio Code", experties: "75" },
        { name: "Vite", experties: "70" },
      ],
    },
    {
      title: "Soft Skills",
      content: [
        { name: "Problem Solving", experties: "80" },
        { name: "Collaboration", experties: "85" },
        { name: "Attention to Detail", experties: "90" },
      ],
    },
  ];
  const handleClick = (index) => {
    setTabState(index);
    // console.log(index);
  };
  return (
    <section className="mt-14 mb-12 flex flex-col gap-6 lg:gap-0 lg:flex-row ">
      <div className="lg:w-3/6 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-2 w-full lg:justify-center bg-primary-light py-4 rounded-lg text-primary `}
        >
          {skills.map((item, index) => (
            <Button
              className={
                index === tabState
                  ? " text-white bg-primary font-semibold border-none cursor-auto"
                  : "bg-transparent font-semibold hover:text-black hover:bg-primary-light border-none"
              }
              key={index}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      {/* content starts  */}
      <div className="lg:w-3/6 flex justify-center relative border-[5px] border-primary ">
        <div className="grid w-full grid-cols-1 gap-6 pt-5 justify-start">
          {skills.map((title, index) => {
            if (index === tabState) {
              return title.content.map((item, index) => {
                return (
                  <div key={index} className="bg-primary ">
                    {item.name}
                  </div>
                );
              });
            } else {
              return;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
