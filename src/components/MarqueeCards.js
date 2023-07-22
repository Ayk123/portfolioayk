import Marquee from "react-fast-marquee";

export const MarqueeCards = ({ children, direction }) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
      //   play={false}
    >
      {children}
    </Marquee>
  );
};
