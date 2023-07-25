import React from "react";
// intersection observer hook
import { useInView } from "react-intersection-observer";
import { SectionTitle } from "../components/SectionTitle";
import { MarqueeCards } from "../components/MarqueeCards";
import { ToolsCards } from "../components/ToolsCards";

export const Tools = () => {
  //eslint-disable-next-line
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="w-full flex justify-center overflow-hidden"
      id="tools"
      ref={ref}
    >
      <div className="container mx-auto min-h-screen relative">
        <div className="w-full lg:gap-y-0 lg:min-h-screen flex flex-col content-center ">
          <SectionTitle title="Tech Stack" subtitle="Tech I Use" />
          <div className="xl:border-l-2 xl:border-r-2 h-full mt-8">
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[2px] bg-[#ffffff4d]"></div>
              <MarqueeCards direction="left">
                <ToolsCards />
              </MarqueeCards>
            </div>
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[2px] bg-[#ffffff4d]"></div>
              <MarqueeCards direction="right">
                <ToolsCards />
              </MarqueeCards>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
