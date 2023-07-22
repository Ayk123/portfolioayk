import React from "react";
import { Tilt } from "react-tilt";
import image from "../assets/cinezonevanillajs.png";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

export const ProjectCards = () => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="rounded-2xl max-h-[1500px] max-w-[362px] w-full m-3"
    >
      <div className="w-full h-full rounded-2xl p-4 flex flex-col border-8 border-[#ffffff4d] bg-black/20 backdrop-blur-2xl">
        <div>
          <div className="relative w-full">
            <img
              src={image}
              alt=""
              className="w-full h-[250px] rounded-[10px] object-cover"
            />
          </div>
          <div className="flex mt-5 items-center justify-between">
            <h3 className="text-[25px] ">Title</h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
                <a href="#" target="_blank">
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
                <a href="#" target="_blank">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="mt-2 text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius
            sapiente nesciunt
          </p>
        </div>
      </div>
    </Tilt>
  );
};
