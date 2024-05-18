"use client";
import { useSession } from "next-auth/react";
import { get } from "lodash";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function MainSection() {
  const session = useSession();
  const primaryColor = get(session, "primaryColor");
  return (
    <div className="flex flex-col items-center content-center m-28  font-serif ">
      <div style={{ width: "500px" }} className="text-center content-center">
        <h2 className="text-black text-2xl"></h2>
        <h1 className="text-3xl mt-4 text-black  content-center text-center"></h1>
        <h3 className="text-md mt-4 text-black content-center text-center"></h3>
      </div>
    </div>
  );
}
