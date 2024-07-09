import React from "react";
import { iconSets } from "../../lib/icon";
import Link from "next/link";

const Media = ({ socialMediaIcons, skills, isRightBanner = true }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        {/* <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2> */}
        {isRightBanner ? (
          <div className="flex flex-row mt-8 lgl:flex-col lgl:mt-0 gap-4">
            {socialMediaIcons?.map((icon) => {
              const SelectedIcon = iconSets?.[icon?.icon];
              return (
                <Link href={icon?.url} target="_blank">
                  <span className="bannerIcon">
                    <SelectedIcon />
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              {skills?.map((icon) => {
                const SelectedIcon = iconSets?.[icon?.icon];
                return (
                  <span className="bannerIcon">
                    <SelectedIcon />
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
