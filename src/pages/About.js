import React from "react";

// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Image
import one from "../assets/one.jpg";
//Intro
import { introduction } from "../constants/constants";
import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className=" w-full flex justify-center overflow-hidden"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto min-h-screen relative">
        {/* <SectionTitle title="About me" subtitle="Introduction" /> */}

        {/* <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen"> */}
        <div className="w-full lg:gap-y-0 lg:min-h-screen">
          <SectionTitle title="About me" subtitle="Introduction" />

          <div className="flex flex-col lg:flex-row lg:items-center">
            {/* img */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 mt-8"
            >
              <img
                src={one}
                alt=""
                className="mx-auto bg-contain bg-no-repeat bg-top rounded-2xl border-8 h-[600px] border-[#ffffff4d] backdrop-blur-2xl bg-black/20"
              />
            </motion.div>
            {/* text */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 bg-black/20 p-[20px] backdrop-blur-2xl rounded-2xl border-8 border-[#ffffff4d] text-center mt-[20px]"
            >
              {/* <h2 className="leading-none text-gradient mb-4 text-[36px] lg:text-[60px] font-semibold">
              About Me
            </h2> */}
              <h3 className="leading-none mb-4 text-[37px] lg:text-[37px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                {introduction.text[0]}
              </h3>
              <p className="mb-4 text-[28px]">{introduction.text[1]}</p>
              <p className="mb-4 text-[28px]">{introduction.text[2]}</p>
              <p className="mb-4 text-[28px]">{introduction.text[3]}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
