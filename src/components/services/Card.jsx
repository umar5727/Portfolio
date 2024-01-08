import React from "react";

const Card = ({title, para}) => {
  return (
    <div className="group  relative max-w-[330px] h-[372px] rounded-lg duration-500">
      <div className="w-full aspect-video flex justify-center translate-y-[93px] items-center group-hover:-translate-y-[0px] duration-500 bg-gray-900 text-white z-20 rounded-t-xl group-hover:shadow-glowShadow serviceCard">
        <h2 className="text-2xl"> {title}</h2>
      </div>
      <div className="flex justify-center items-center absolute aspect-video top-[93px] left-0 right-0 rounded-xl transition-all duration-500 bg-primary -z-10 group-hover:top-[186px] group-hover:rounded-t-none ">
        <p className="text-white">
        {para}
        </p>
      </div>
    </div>
  );
};

export default Card;
