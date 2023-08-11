import React from "react";
import { Tilt } from "react-tilt";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { useFetch } from "../hooks/useFetch";

export const ProjectCards = ({ repoName, scUrl }) => {
  const { data } = useFetch(repoName);
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="rounded-2xl max-h-[1500px] max-w-[460px] w-full m-3"
    >
      <div className="w-full h-full rounded-2xl p-4 flex flex-col border-8 border-[#ffffff4d] bg-black/20 backdrop-blur-2xl">
        <div className="relative w-full">
          <img
            src={scUrl}
            alt=""
            className="max-w-full h-[auto] rounded-[10px] object-cover"
          />
        </div>
        <div className="flex mt-5 items-center justify-between">
          <h3 className="text-[25px] ">{data.name}</h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
              <a href={data.html_url} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-[#ffffff4d] inline-flex justify-center items-center cursor-pointer icon-container">
              <a href={data.homepage} target="_blank" rel="noreferrer">
                <FaGlobe />
              </a>
            </span>
          </div>
        </div>
        <p className="mt-2 text-[20px]">{data.description}</p>
      </div>
    </Tilt>
  );
};
