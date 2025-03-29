"use client";
import { get } from "lodash";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

export default function TopSection({ data, location }) {
  const name = get(data, "name");
  const description = get(data, "description");
  const socialMediaIcons = get(data, "socialMediaIcons", []);
  const gitUrl = socialMediaIcons.find((icon) => get(icon, "name") == "Github");
  const linkedinUrl = socialMediaIcons.find(
    (icon) => get(icon, "name") == "LinkedIn"
  );
  return (
    <div className="grid md:grid-cols-3 gap-3 px-4 md:px-8 lg:px-16">
      <div className="col-span-2">
        <h3 className="text-4xl font-bold mt-16">Hi, I'm {name}</h3>
        <p className="text-md mt-3  text-neutral">{description}</p>
        <div className="flex items-center gap-1 mt-4 text-neutral">
          <CiLocationOn />
          <p className="text-md">{location}</p>
        </div>
        <div className="flex gap-2 mt-8">
          <Link href={get(gitUrl, "url", "")} target="_blank">
            <LuGithub size={20} />
          </Link>
          <Link href={get(linkedinUrl, "url", "")} target="_blank">
            <CiLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
