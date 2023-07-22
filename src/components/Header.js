import React, { useEffect, useState } from "react";
// logo
import Logo from "../assets/logo2.svg";
import { Link } from "react-scroll";

export const Header = () => {
  const [showLogo, setShowLogo] = useState(true);
  const handleScroll = () => {
    if (window.innerWidth <= 1635) {
      setShowLogo(window.pageYOffset <= 0);
    } else {
      setShowLogo(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <nav className="w-full flex items-center py-5 px-[25px] lg:px-[100px] fixed top-0 z-20">
    <nav
      className={`w-full flex items-center py-5 px-[25px] lg:px-[100px] fixed top-0 z-20 ${
        showLogo ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      {/* <div className="container mx-auto"> */}
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        {/* logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img className="w-[120px]" src={Logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};
