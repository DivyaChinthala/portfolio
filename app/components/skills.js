"use client";
import * as Icons from "react-icons/fa";
import * as IconsIo5 from "react-icons/io5";
import * as IconsSi from "react-icons/si";
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";

export default function SkillsSection({ skills = [] }) {
  const iconsPerSlide = 10;
  const totalSlides =
    skills.length > iconsPerSlide
      ? Math.ceil(skills.length / iconsPerSlide)
      : 1;
  return (
    <div className="flex flex-col items-center content-center mt-16">
      <div
        style={{ width: "45%" }}
        className="flex items-center text-start content-center"
      >
        <p className="text-md font-semibold"> Skills </p>
        <div className="divider divider-vertical">|</div>
        <div className="carousel w-full relative">
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * iconsPerSlide;
            const slideSkills = skills.slice(
              startIndex,
              startIndex + iconsPerSlide
            );
            const prevSlide =
              slideIndex === 0 ? totalSlides - 1 : slideIndex - 1;
            const nextSlide =
              slideIndex === totalSlides - 1 ? 0 : slideIndex + 1;
            return (
              <div
                id={`slide${slideIndex}`}
                key={slideIndex}
                className="carousel-item w-full flex items-center justify-start relative"
              >
                {totalSlides > 1 && slideIndex !== 0 && (
                  <a href={`#slide${prevSlide}`} className="mr-4">
                    <MdArrowLeft size={25} />
                  </a>
                )}
                <div className="flex gap-2 items-center">
                  {slideSkills.map((skill, index) => {
                    const IconComponent =
                      Icons[skill.icon] ||
                      IconsIo5[skill.icon] ||
                      IconsSi[skill.icon];
                    return IconComponent ? (
                      <div className="tooltip" data-tip={skill.text}>
                        <IconComponent
                          key={index}
                          className="text-3xl cursor-pointer"
                          color={skill.color}
                        />
                      </div>
                    ) : null;
                  })}
                </div>
                {totalSlides > 1 && slideIndex !== totalSlides - 1 && (
                  <a href={`#slide${nextSlide}`} className="ml-8">
                    <MdArrowRight size={25} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
