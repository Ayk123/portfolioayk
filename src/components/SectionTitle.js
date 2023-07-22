import { m, LazyMotion, domAnimation } from "framer-motion";
// variants
import { fadeIn } from "../variants";

export const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pt-8 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2 className="leading-none text-[55px] lg:text-[90px] cursor-pointer font-bold">
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};
