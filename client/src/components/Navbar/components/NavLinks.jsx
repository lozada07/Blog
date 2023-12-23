import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../../constans/paths";
import { useEffect } from "react";
const NavLinks = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <>
      {navLinks.map((item) => {
        return (
          <Link
            to={item.path}
            key={item.path}
            className={`${
              item.path === location.pathname
                ? "relative w-full flex justify-center before:absolute before:top-0 before:w-1 before:bg-primary before:h-full bg-green-100 md:bg-transparent md:before:w-full md:before:h-0.5 md:before:bottom-0 before:left-0 md:before:top-10"
                : "relative w-full flex justify-center hover:before:absolute hover:before:top-0 hover:before:w-1 hover:before:bg-primary/30 hover:before:h-full hover:bg-green-50 md:hover:bg-transparent md:bg-transparent md:hover:before:w-full md:hover:before:h-0.5 md:hover:before:bottom-0 hover:before:left-0 md:hover:before:top-10"
            } p-3 md:p-0 `}
          >
            {item.display}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
