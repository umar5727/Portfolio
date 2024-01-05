import React, { useState } from "react";
import Button from "../../button/Button";

const Tabs = () => {
  const [tabState, setTabState] = useState(0);
  const skills = [
    {
      title: "Frontend",
      content: [
        { id: 1, name: "React.js", experties: 75 },
        { id: 2, name: "JavaScript", experties: 76 },
        { id: 3, name: "Tailwind CSS", experties: 85 },
        { id: 4, name: "HTML5", experties: 95 },
        { id: 5, name: "CSS3", experties: 86 },
        { id: 6, name: "Bootstrap5", experties: 70 },
      ],
    },
    {
      title: "Backend",
      content: [
        { id: 7, name: "Nood.js", experties: 48 },
        { id: 8, name: "Express.js", experties: 50 },
        { id: 9, name: "Mongo DB", experties: 55 },
      ],
    },
    {
      title: "Tools",
      content: [
        { id: 10, name: "Git & GitHub", experties: 85 },
        { id: 11, name: "Visual Studio Code", experties: 80 },
        { id: 12, name: "Vite", experties: 70 },
      ],
    },
    {
      title: "Soft Skills",
      content: [
        { id: 13, name: "Problem Solving", experties: 80 },
        { id: 14, name: "Collaboration", experties: 85 },
        { id: 15, name: "Attention to Detail", experties: 90 },
      ],
    },
  ];
  const handleClick = (index) => {
    setTabState(index);
    // console.log(index);
  };
  return (
    <section className="mt-10 mb-12 h-[70%] flex flex-col md:gap-0 md:flex-row text-primary dark:text-white">
      <div className="md:w-1/3 lg:w-3/6 py-5 md:py-8  flex flex-col lg:gap-8 justify-center items-center text-center lg:text-left lg:items-start md:pr-10 order-2 md:order-1">
        <div
          className={`grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 w-full lg:justify-center md:py-4 rounded-lg text-primary text-xl lg:text-2xl `}
        >
          {skills.map((item, index) => (
            <Button
              className={
                index === tabState
                  ? " text-white bg-primary font-semibold border-none cursor-auto lg:py-5 border-2 border-primary"
                  : " bg-transparent font-semibold  lg:py-5 border-2 border-primary hover:text-black hover:bg-primary-light "
              }
              key={index}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
        {/* tabs ends */}
      </div>
      {/* content starts  */}
      <div className="md:w-2/3 lg:w-3/6 flex justify-center relative border-[4px] border-primary rounded-lg order-1 lg:order-2">
        <div className="w-full py-2 ">
          {skills.map((title, index) => {
            if (index === tabState) {
              return (
                <div key={index} className="">
                  <div className="text-2xl border-b-[4px] border-primary pb-3 pt-2 px-10 ">
                    {title.title}
                  </div>
                  {/* content title ends */}
                  <div className="grid gap-4 grid-rows-6 py-6">
                    {title.content.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="relative px-10 "
                        >
                          <h2 className="text-lg font-semibold">
                            {item.name}
                            <span
                              className="absolute "
                              style={{ left: `${item.experties - 9}%` }}
                            >
                              {item.experties}%
                            </span>
                          </h2>
                          <div className="block w-full h-2 mt-[6px] bg-primary/40 rounded-full relative">
                            <div
                              className={`block bg-primary  h-2 rounded-full`}
                              style={{ width: item.experties + "%" }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
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
