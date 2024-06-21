"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { get } from "lodash";
import { MdOutlineComputer } from "react-icons/md";
import * as Icons from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = ({ topSection }) => {
  const { data: session } = useSession();
  const primaryColor = get(session, "primary");
  const socialMediaIcons = get(topSection, "socialMediaIcons", []);
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            {get(topSection, "mainHeading", "Fron-End React Developer")}{" "}
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {get(
            topSection,
            "description",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          )}
        </p>
      </div>
      {/* Media */}
      {/* <Media /> */}
    </div>
  );
};

export default LeftBanner;
