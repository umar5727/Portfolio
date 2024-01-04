import { Link } from "react-scroll";

import { useContext } from "react";
import NavContext from "../context/navcontext/NavContext";

const Navigation = () => {
  const { navToggle, setNavToggle } = useContext(NavContext);
  const HandleClick = (e) => {
    e.preventDefault();
    setNavToggle(false);
  };
  const navItems = [
    { name: "Services", slug: "services" },
    { name: "Skills", slug: "skill" },
    { name: "Projects", slug: "project" },
    { name: "Contact me", slug: "contact" },
  ];
  // console.log(navToggle +"from navigation")
  var className = "hidden";
  var liClass = "";
  if (!navToggle) {
    className = "h-1 ";
    liClass = "";
  } else {
    className = "flex flex-col h-52 ";
    liClass = "border-y  border-border-dark rounded-none ";
  }

  return (
    <>
    <ul
      className={`navShadow w-full text-primary font-bold lg:gap-1 overflow-hidden absolute top-16 left-0  z-50 ${className} md:shadow-none md:w-auto md:py-2 md:px-4 md:flex md:static md:h-auto md:items-center xl:text-lg transition-height duration-300 z-50 bg-gray-200 dark:bg-gray-950 md:bg-transparent md:dark:bg-transparent`}
    >
      {navItems.map((item, index) => (
        <Link
        to={item.slug}
        smooth={true}
          key={index}
          className="group block px-7  py-3 rounded-full text-primary dark:text-[rgb(211,211,211)] hover:scale-110 dark:hover:text-white cursor-pointer ${liClass} transition-all duration-300 dark:text-dark-nav "
        >
          <li
            className={`relative w-fit before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-1 before:w-0 before:h-1 before:bg-primary before:duration-300 group-hover:before:w-full`}
            onClick={HandleClick}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
      </>
  );
};

export default Navigation;
