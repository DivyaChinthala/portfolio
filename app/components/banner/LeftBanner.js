import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const LeftBanner = ({ data, contact }) => {
  const roles = data?.roles ?? [];
  const socialMediaIcons = data?.socialMediaIcons ?? [];
  const skills = data?.skills ?? [];
  const [text] = useTypewriter({
    words: roles.map((role) => role.role),
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const email = contact?.email;
  const onHireMe = () => {
    const subject = "Hello";
    const body = "How are you?";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">{data?.name}</span>
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
          {data?.description}
        </p>
        <div className="mt-2">
          <div className="flex gap-4">
            {/* <ScrollLink
              to={"contact"}
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-70}
              duration={500}
            > */}
            <button className="btn" onClick={onHireMe}>
              Hire me
            </button>
            {/* </ScrollLink> */}
            <Link href={data?.resume?.url} target="_blank">
              <button className="btn">
                <MdOutlineFileDownload /> Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Media */}
      <Media
        socialMediaIcons={socialMediaIcons}
        skills={skills}
        isRightBanner={false}
      />
    </div>
  );
};

export default LeftBanner;
