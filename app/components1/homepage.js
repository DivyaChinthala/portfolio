"use client";

import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Features from "../components/features/Features";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";

export default function Homepage({ data }) {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar data={data?.logo} />
      <div className="max-w-screen-xl mx-auto">
        <Banner data={data?.topSection} />
        <Features data={data?.services} />
        <Projects data={data?.projects} />
        <Resume
          education={data?.education}
          skills={data?.skills}
          experience={data?.experience}
          achievements={data?.achievements}
        />
        <Contact
          data={data?.contact}
          socialMediaIcons={data?.topSection?.socialMediaIcons}
        />
        <Footer
          logo={data?.logo}
          socialMediaIcons={data?.topSection?.socialMediaIcons}
        />
        <FooterBottom name={data?.topSection?.name} />
      </div>
    </div>
  );
}
