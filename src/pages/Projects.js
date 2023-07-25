import React from "react";
import { SectionTitle } from "../components/SectionTitle";
// intersection observer hook
import { useInView } from "react-intersection-observer";
import { ProjectCards } from "../components/ProjectCards";
import { projectRepo } from "../constants/constants";

export const Projects = () => {
  //eslint-disable-next-line
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="w-full flex flex-col min-h-screen justify-center overflow-hidden"
      id="project"
      ref={ref}
    >
      <div className="container mx-auto relative">
        <div className="w-full lg:gay-y-0  flex flex-col content-center">
          <SectionTitle title="Projects" subtitle="What I have done so far" />
        </div>
      </div>
      <div className="max-w-[1536px] mx-auto flex justify-center flex-wrap other:justify-evenly mt-8">
        {projectRepo.map((repoObj, index) => (
          <ProjectCards
            key={index}
            repoName={repoObj.repo}
            scUrl={repoObj.scUrl}
          />
        ))}
        {/* <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards /> */}
      </div>
    </section>
  );
};
