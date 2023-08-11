import React from "react";
// intersection observer hook
import { useInView } from "react-intersection-observer";
import { SectionTitle } from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";
export const Contact = () => {
  //eslint-disable-next-line
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="w-full flex justify-center overflow-hidden"
      id="contact"
      ref={ref}
    >
      <div className="container mx-auto min-h-screen relative">
        <div className="w-full lg:gap-y-0 lg:min-h-screen flex flex-col content-center ">
          <SectionTitle title="Contact" subtitle="Get in touch" />
          <div className="w-full flex justify-center items-center mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
