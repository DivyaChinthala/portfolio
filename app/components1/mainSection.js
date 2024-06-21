"use client";

import LeftBanner from "./leftBanner";
import { MdWavingHand } from "react-icons/md";

export default function MainSection({ topSection }) {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner topSection={topSection} />
      {/* <RightBanner /> */}
    </section>
  );
}
