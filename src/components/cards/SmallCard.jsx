import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallCard = ({
  className,
  icon,
  iconStyle,
  image = "",
  transition = "hover:-translate-y-2",
}) => {
  console.log(image);
  return (
    <div
      className={`w-[52px] h-[52px] flex items-center justify-center border rounded-lg ${className} cursor-text z-50`}
    >
      <div className={`w-10 h-10 duration-300  ${iconStyle} ${transition}`}>
        {icon ? (
          <FontAwesomeIcon icon={icon} className="w-full h-full" />
        ) : (
          <img src={image} alt={image} className="w-ful h-full" />
        )}
      </div>
    </div>
  );
};

export default SmallCard;
