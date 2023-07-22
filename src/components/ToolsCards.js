import { m, LazyMotion, domAnimation } from "framer-motion";
import { tools } from "../constants/constants";

export const ToolsCards = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {tools.map((tool, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[300px] h-[300px] flex flex-col place-content-center rounded-xl cursor-pointer bg-black/20 backdrop-blur-2xl rounded-2xl border-8 border-[#ffffff4d]"
          >
            <div className="w-full flex gap-2 p-1 flex-col items-center">
              <img
                className="h-[200px] flex justify-center w-[200px] bg-primary-600  p-1 object-contain object-fit"
                src={tool.icon}
                alt={tool.title}
              />
              <span className="text-[40px] font-semibold">{tool.title}</span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};
