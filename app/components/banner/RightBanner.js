import React from "react";
import Image from "next/image";

const RightBanner = ({ data }) => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Image
        className="w-[300px] h-[300px] lgl:w-[550px] lgl:h-[500px] z-10 rounded-lg"
        src={data?.url || ""}
        alt="bannerImg"
        width={300}
        height={300}
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[550px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
