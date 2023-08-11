import React from "react";
import { SectionTitle } from "../components/SectionTitle";
// intersection observer hook

import { ProjectCards } from "../components/ProjectCards";
import { projectRepo } from "../constants/constants";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

export const Projects = () => {
  return (
    <section
      className="w-full flex flex-col min-h-screen justify-center overflow-hidden"
      id="project"
    >
      <div className="container mx-auto relative">
        <div className="w-full lg:gay-y-0  flex flex-col content-center">
          <SectionTitle title="Projects" subtitle="What I have done so far" />
        </div>
      </div>
      <div className="max-w-[1536px] mx-auto flex justify-center flex-wrap other:justify-evenly mt-8 mb-8">
        {projectRepo.map((repoObj, index) => (
          <motion.div
            className="flex justify-center flex-wrap other:justify-evenly"
            key={index}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
          >
            <ProjectCards
              key={index}
              repoName={repoObj.repo}
              scUrl={repoObj.scUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
