import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">My Achievements</h2>
        </div>
        <div
          className={`mt-14 w-full h-[${
            data?.length * 300
          }px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10`}
        >
          {data?.map((achievement) => {
            return (
              <ResumeCard
                title={achievement?.name}
                subTitle={achievement?.eventOrCompany}
                result="Success"
                des={achievement?.description}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
