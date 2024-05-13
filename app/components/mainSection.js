"use client";
import { useSession } from "next-auth/react";
import { get } from "lodash";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function MainSection() {
  const session = useSession();
  const primaryColor = get(session, "primaryColor");
  return (
    <div className="flex flex-col m-28 justify-center items-center">
      <h2 className="text-black text-2xl">Hi, I'm Divya Naga Lakshmi</h2>
      <h1 className="text-3xl mt-4 text-black">
        Passionate & Innovative Full Stack Developer{" "}
      </h1>
      <div className="flex gap-3 mt-4">
        <button
          className="btn btn-primary"
          style={{ backgroundColor: primaryColor }}
        >
          Download Resume
        </button>
        <button
          className="btn btn-accent"
          style={{ backgroundColor: primaryColor }}
        >
          Hire me
        </button>
      </div>
      <div className="flex gap-3 mt-4">
        <button className="btn btn-primary btn-sm">
          <FaGithub color="black" className="cursor-pointer" size={15} />
        </button>
        <button className="btn btn-primary btn-sm">
          <FaLinkedinIn color="black" className="cursor-pointer" size={15} />
        </button>
      </div>
    </div>
  );
}
