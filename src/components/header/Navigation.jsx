
import { Link } from "react-scroll";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ navbtn }) => {
  const navItems = [
    { name: "Services", slug: "services" },
    { name: "Skills", slug: "skill" },
    { name: "Projects", slug: "project" },
    { name: "Contact me", slug: "contact" },
    
  ];
  var className = "hidden";
  var liClass = "";
  if (!navbtn) {
    className = "h-1 ";
    liClass = "";
  } else {
    className =
      "flex flex-col bg-white  lightShadow h-52 dark:bg-primary-dark ";
    liClass = "border-y  border-border-dark  rounded-none ";
  }

  return (
    <ul
      className={`navShadow  w-full text-primary-grayText font-bold lg:gap-1 overflow-hidden  absolute  top-16 left-0 z-10 ${className} md:shadow-none md:w-auto md:py-2 md:px-4 md:flex md:static md:h-auto md:items-center transition-height duration-300`}
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.slug}
            smooth={true}
            
            className={`block px-7  py-3 rounded-full hover:bg-primary-light hover:text-primary cursor-pointer ${liClass} transition-colors duration-300 dark:text-dark-nav`}
          >
            {item.name}
            
          </Link>
        </li>
      ))}
      <li className={`block px-7  py-3 ml-10 rounded-full bg-primary text-white  cursor-pointer ${liClass} transition-colors duration-300`}>
    
          {/* <Link
            to='contact'
            className={`block px-7  py-3 ml-10 rounded-full bg-primary text-white  cursor-pointer ${liClass} transition-colors duration-300`}
          >
            Contact
            
          </Link> */}
          Download CV 
          <FontAwesomeIcon icon={faDownload} />
        </li>
    </ul>
  );
};

export default Navigation;
