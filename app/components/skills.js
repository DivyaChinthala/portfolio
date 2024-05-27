"use client";
import * as Icons from "react-icons/fa";
import * as IconsIo5 from "react-icons/io5";
import * as IconsSi from "react-icons/si";
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import { useState } from "react";

export default function SkillsSection({ skills = [] }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const iconsPerSlide = 10;
  const totalSlides =
    skills.length > iconsPerSlide
      ? Math.ceil(skills.length / iconsPerSlide)
      : 1;
  const startIndex = currentSlideIndex * iconsPerSlide;
  const slideSkills = skills.slice(startIndex, startIndex + iconsPerSlide);
  const prevSlide =
    currentSlideIndex === 0 ? totalSlides - 1 : currentSlideIndex - 1;
  const nextSlide =
    currentSlideIndex === totalSlides - 1 ? 0 : currentSlideIndex + 1;
  return (
    <div className="flex flex-col items-center content-center mt-16">
      <div
        style={{ width: "45%" }}
        className="flex items-center text-start content-center"
      >
        <p className="text-md font-semibold"> Skills </p>
        <div className="divider divider-vertical">|</div>
        <div className="carousel w-full relative">
          return (
          <div className="carousel-item w-full flex items-center justify-start relative">
            {totalSlides > 1 && currentSlideIndex !== 0 && (
              <MdArrowLeft
                size={25}
                className="mr-4 cursor-pointer"
                onClick={() => setCurrentSlideIndex(prevSlide)}
              />
            )}
            <div className="flex gap-2 items-center">
              {slideSkills.map((skill, index) => {
                const IconComponent =
                  Icons[skill.icon] ||
                  IconsIo5[skill.icon] ||
                  IconsSi[skill.icon];
                return IconComponent ? (
                  <div
                    className="tooltip"
                    // style={{ zIndex: 1000 }}
                    // data-tip={skill.text}
                    // data-bs-placement="bottom"
                  >
                    <IconComponent
                      key={index}
                      className="text-3xl cursor-pointer"
                      color={skill.color}
                    />
                  </div>
                ) : null;
              })}
            </div>
            {totalSlides > 1 && currentSlideIndex !== totalSlides - 1 && (
              <MdArrowRight
                size={25}
                className="ml-8 cursor-pointer"
                onClick={() => setCurrentSlideIndex(nextSlide)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
