import React from "react";
// icons
import { FaGithub, FaLinkedin, FaEnvelope, FaIdCard } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Import Links
import { Link } from "react-scroll";
export const Hero = () => {
  const text = "Hi! I'm Ayk Diaz";
  return (
    <section
      className="cursor-pointer h-screen min-h-[85vh] lg:min-h-[78vh] lg:mb-[50px] flex justify-center items-center overflow-hidden relative"
      id="home"
    >
      <div className="container mx-auto absolute">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] mb-6 font-bold leading-[0.8] lg:text-[90px]"
            >
              {text.split("").map((char, index) => {
                if (char === " ") {
                  return " ";
                }
                return <span className="bounce">{char}</span>;
              })}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-semibold leading-[1]"
            >
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Drummer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="font-extrabold text-transparent text-[78px] bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 max-w-lg mx-auto lg:mx-0 font-medium text-[28px]"
            >
              A passionate Full-Stack Web Developer based in Bayombong, Nueva
              Vizcaya.
            </motion.p>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
                <a href="https://www.linkedin.com/in/ayk-diaz/" target="_blank">
                  <FaLinkedin />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
                <a href="https://github.com/Ayk123" target="_blank">
                  <FaGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  <FaEnvelope />
                </Link>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
                <a href="#">
                  <FaIdCard />
                </a>
              </span>
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="bannerImg hidden lg:flex  "
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
