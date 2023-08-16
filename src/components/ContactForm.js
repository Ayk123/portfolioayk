import React from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaExclamationTriangle } from "react-icons/fa";
// import { calcLength } from "framer-motion";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  const form = useRef();
  const sendEmail = (data) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Thank you I will get back to you as soon as possible ! (:");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="min-h-[550px] w-[100%] xl:w-[50%] bg-black/20 p-[20px] backdrop-blur-2xl rounded-2xl border-8 border-[#ffffff4d] relative bottom-0 mb-[100px]">
      <div>
        <h2 className="h-10 text-3xl lg:text-5xl text-center rounded-xl relative">
          <Typewriter words={["Let's work together!"]} loop={true} />
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <form
          action=""
          className="w-[80%] h-full"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          // onSubmit={handleSubmit((data) => {
          //   console.log(data);
          // })}
        >
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="fullname" className="text-[25px] pb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="user_fullname"
              className="p-[0.5em] rounded-lg text-black font-bold text-[23px]"
              placeholder="Enter your full name"
              {...register("user_fullname", {
                required: "Your Name is Required",
              })}
            />
            {errors.user_fullname && (
              <span className="text-red-600 font-bold flex flex-row items-center pt-1 pl-1">
                <FaExclamationTriangle />{" "}
                <p className="pl-1">{errors.user_fullname?.message}</p>
              </span>
            )}
          </div>
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="email" className="text-[25px] pb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              className="p-[0.5em] rounded-lg text-black font-bold text-[23px]"
              placeholder="Enter your email"
              {...register("user_email", {
                required: "Enter a valid Email",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                },
              })}
            />
            {errors.user_email && (
              <span className="text-red-600 font-bold flex flex-row items-center pt-1 pl-1">
                <FaExclamationTriangle />{" "}
                <p className="pl-1">{errors.user_email?.message}</p>
              </span>
            )}
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
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-600 font-bold flex flex-row items-center pt-1 pl-1">
                <FaExclamationTriangle />{" "}
                <p className="pl-1">{errors.message?.message}</p>
              </span>
            )}
          </div>
          <div className="w-full flex justify-center items-center flex-col mt-5">
            <button
              type="submit"
              className="w-[200px] h-[50px] bg-[#ffffff4d] rounded-lg icon-container"
            >
              <span className="text-2xl">SEND</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
