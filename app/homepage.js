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
import ProjectMoreInfo from "./components/projects/projectMoreInfo";

export default function Homepage({ data }) {
  const [showSteps, setShowSteps] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [serviceId, setServiceId] = useState(null);
  const isMobile = window.innerWidth <= 800;
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar data={data?.logo} topSection={data?.topSection} />
      <div className="max-w-screen-xl mx-auto">
        <Banner data={data?.topSection} contact={data?.contact} />
        <Features
          data={data?.services}
          setServiceId={setServiceId}
          setShowSteps={setShowSteps}
        />
        <Projects
          data={data?.projects}
          setProjectId={setProjectId}
          setShowMoreInfo={setShowMoreInfo}
        />
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
              width: isMobile ? "98%" : "65%",
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
        {showMoreInfo && (
          <Drawer
            open={showMoreInfo}
            onClose={() => setShowMoreInfo(false)}
            direction="right"
            className="bla bla bla"
            style={{
              width: isMobile ? "98%" : "65%",
            }}
          >
            <ProjectMoreInfo
              project={data?.projects?.find(
                (project) => project.id == projectId
              )}
              setShowMoreInfo={setShowMoreInfo}
            />
          </Drawer>
        )}
      </div>
    </div>
  );
}
