"use client";
import { useSession } from "next-auth/react";
import { get } from "lodash";
import { MdOutlineComputer } from "react-icons/md";
import * as Icons from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

export default function MainSection({ topSection }) {
  const { data: session } = useSession();
  const primaryColor = get(session, "primary");
  const socialMediaIcons = get(topSection, "socialMediaIcons", []);
  return (
    <div className="flex flex-col items-center content-center m-28 ">
      <div style={{ width: "45%" }} className="text-start content-center">
        <h2 className="text-3xl font-bold flex items-center">
          {get(topSection, "mainHeading", "Fron-End React Developer")}{" "}
          <MdOutlineComputer className="ml-4" color={primaryColor} />
          <MdWavingHand className="ml-4" color="#f1c27d" />
        </h2>
        <h1 className="text-md mt-4  content-center text-start">
          {get(
            topSection,
            "description",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          )}
        </h1>
        <div className="flex gap-3 mt-4">
          {socialMediaIcons.map((item) => {
            const IconComponent = Icons[item.value];
            return <IconComponent className="text-xl cursor-pointer" />;
          })}
        </div>
      </div>
    </div>
  );
}
