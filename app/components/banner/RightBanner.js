import React from "react";
import Image from "next/image";
import Media from "./Media";

const RightBanner = ({ data, socialMediaIcons, skills }) => {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col lgl:flex-row  justify-around items-center">
      <div className="relative flex justify-center items-center">
        <Image
          className="absolute w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] z-10 flex justify-center items-center rounded-lg"
          src={data?.url || ""}
          alt="bannerImg"
          width={300}
          height={300}
        />
        <div className="left-0 bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
      <Media
        socialMediaIcons={socialMediaIcons}
        skills={skills}
        isRightBanner={true}
      />
    </div>
  );
};

export default RightBanner;
