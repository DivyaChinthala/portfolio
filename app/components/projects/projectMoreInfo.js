"use client";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import Testimonial from "../tesimonial/Testimonial";

export default function ProjectMoreInfo({ project, setShowMoreInfo }) {
  const moreInfo = project?.moreInfo || [];
  const additionalImages = project?.additionalImages ?? [];
  const [isAdditionalImgsOpened, setIsAdditionalImgsOpened] = useState(false);
  const [isMoreInfoOpened, setIsMoreInfoOpened] = useState(false);
  const toggleAdditionalImgs = (value) => {
    setIsAdditionalImgsOpened(value);
  };
  const toggleMoreInfo = (value) => {
    setIsMoreInfoOpened(value);
  };
  return (
    <div className="bg-bodyColor h-screen lgl:p-6 p-3 overflow-y-scroll">
      <div className="flex items-center ">
        <h2 className="text-xl font-bold">{project?.name}</h2>
        <IoMdClose
          className="cursor-pointer ml-auto text-accent"
          size={25}
          onClick={() => setShowMoreInfo(false)}
        />
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() =>
          isMoreInfoOpened ? toggleMoreInfo(false) : toggleMoreInfo(true)
        }
      >
        {isMoreInfoOpened ? (
          <CiSquareMinus size={25} className="cursor-pointer" />
        ) : (
          <CiSquarePlus size={25} className="cursor-pointer" />
        )}
        <h2 className="text-xl mt-4 font-semibold mb-4 text-accent">
          More Info
        </h2>
      </div>
      {isMoreInfoOpened && (
        <>
          {moreInfo.map((step) => (
            <div key={step.id} className="step">
              {step.description.split("\n").map((line, index) => (
                <p key={index} className="text-md mb-3">
                  {line}
                </p>
              ))}
            </div>
          ))}
          {moreInfo.length == 0 && (
            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-slate-400">No Info Found</p>
            </div>
          )}
        </>
      )}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() =>
          isAdditionalImgsOpened
            ? toggleAdditionalImgs(false)
            : toggleAdditionalImgs(true)
        }
      >
        {isAdditionalImgsOpened ? (
          <CiSquareMinus size={25} className="cursor-pointer" />
        ) : (
          <CiSquarePlus size={25} className="cursor-pointer" />
        )}
        <h2 className="text-xl mt-4 font-semibold mb-4 text-accent">
          Additional Images
        </h2>
      </div>
      {isAdditionalImgsOpened && (
        <>
          {additionalImages.length > 0 ? (
            <Testimonial images={additionalImages} />
          ) : (
            // {steps.length == 0 && (
            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-slate-400">No Images Found</p>
            </div>
            // )}
          )}
        </>
      )}
    </div>
  );
}
