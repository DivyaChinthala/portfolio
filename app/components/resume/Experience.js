import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = ({ data }) => {
  const years =
    data?.flatMap((item) => [parseInt(item.fromYear), parseInt(item.toYear)]) ||
    [];
  const highestYear = Math.max(...years);
  const lowestYear = Math.min(...years);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            {lowestYear} - {highestYear}
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {data?.map((experience) => {
            const currentYear = new Date().getFullYear();
            const isPresent = currentYear == experience?.toYear;
            return (
              <ResumeCard
                title={experience?.role}
                subTitle={`${experience?.company} - (${
                  experience?.fromYear
                } - ${isPresent ? "Present" : experience?.toYear})`}
                result={experience?.location}
                des={experience?.description}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
