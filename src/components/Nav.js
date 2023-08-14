import React from "react";
import {
  FaTools,
  FaHome,
  FaUser,
  FaPaintBrush,
  FaCommentAlt,
} from "react-icons/fa";
// Import Links
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* div inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w[60px] h[60px] flex items-center justify-center"
          >
            <FaHome />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w[60px] h[60px] flex items-center justify-center"
          >
            <FaUser />
          </Link>
          <Link
            to="tools"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w[60px] h[60px] flex items-center justify-center"
          >
            <FaTools />
          </Link>
          <Link
            to="project"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w[60px] h[60px] flex items-center justify-center"
          >
            <FaPaintBrush />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w[60px] h[60px] flex items-center justify-center"
          >
            <FaCommentAlt />
          </Link>
        </div>
      </div>
    </nav>
  );
};
