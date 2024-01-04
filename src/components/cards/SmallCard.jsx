import React from "react";
import H4 from "../heading/H4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallCard = ({ className, icon, iconStyle }) => {
  return (
    <div
      className={`w-[52px] h-[52px] flex items-center justify-center border rounded-lg ${className} cursor-text `}
    >
      <div
        className={`w-10 h-10 duration-300 hover:-translate-y-2 ${iconStyle}`}
      >

      <FontAwesomeIcon
        icon={icon}
        className="w-full h-full"
      />
        </div>
    </div>
  );
};

export default SmallCard;
