"use client";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ServiceSteps from "./components/features/serviceSteps";

export default function Homepage({ data }) {
  const [showSteps, setShowSteps] = useState(false);
  const [serviceId, setServiceId] = useState(null);
  console.log(showSteps);
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar data={data?.logo} />
      <div className="max-w-screen-xl mx-auto">
        <Banner data={data?.topSection} />
        <Features
          data={data?.services}
          setServiceId={setServiceId}
          setShowSteps={setShowSteps}
        />
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
        {showSteps && (
          <Drawer
            open={showSteps}
            onClose={() => setShowSteps(false)}
            direction="right"
            className="bla bla bla"
            style={{
              width: "50%",
            }}
          >
            <ServiceSteps
              service={data?.services?.find(
                (service) => service.id == serviceId
              )}
              setShowSteps={setShowSteps}
            />
          </Drawer>
        )}
      </div>
    </div>
  );
}
