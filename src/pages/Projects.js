import React from "react";
import { SectionTitle } from "../components/SectionTitle";
// intersection observer hook
import { useInView } from "react-intersection-observer";
import { ProjectCards } from "../components/ProjectCards";

export const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="w-full flex justify-center overflow-hidden"
      id="project"
      ref={ref}
    >
      <div className="container mx-auto min-h-screen relative">
        <div className="w-full lg:gay-y-0 lg:min-h-screen flex flex-col content-center">
          <SectionTitle title="Projects" subtitle="What I have done so far" />
          <div className="flex justify-center flex-wrap other:justify-evenly mt-8">
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
          </div>
        </div>
      </div>
    </section>
  );
};
