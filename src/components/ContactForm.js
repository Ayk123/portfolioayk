import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const ContactForm = () => {
  return (
    <div className="min-h-[550px] w-[100%] xl:w-[50%] bg-black/20 p-[20px] backdrop-blur-2xl rounded-2xl border-8 border-[#ffffff4d] relative bottom-0 mb-[100px]">
      <div>
        <h2 className="h-10 text-3xl lg:text-5xl text-center rounded-xl relative">
          <Typewriter words={["Let's work together!"]} loop={true} />
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <form action="" className="w-[80%] h-full">
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="fullname" className="text-[25px] pb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="p-[0.5em] rounded-lg text-black font-bold text-[23px]"
              placeholder="Enter your full name"
            />
          </div>
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="email" className="text-[25px] pb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="p-[0.5em] rounded-lg text-black font-bold text-[23px]"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="message" className="text-[25px] pb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="p-[0.5em] rounded-lg text-black font-bold text-[23px]"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div className="w-full flex justify-center items-center flex-col mt-5">
            <button className="w-[200px] h-[50px] bg-[#ffffff4d] rounded-lg icon-container">
              <span className="text-2xl">SEND</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
