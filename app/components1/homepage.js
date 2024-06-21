"use client";
// import MainSection from "./mainSection";
import axios from "axios";
import { get } from "lodash";
// import SkillsSection from "./skills";
// import AboutSection from "./aboutSection";
// import Projects from "./projects";
// import Contact from "./contact";
// import Navbar from "./navbar";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Features from "../components/features/Features";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Testimonial from "../components/tesimonial/Testimonial";
import Contact from "../components/contact/Contact";
// import { getAuthSession } from "../api/authOptions";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";

export default function Homepage() {
  // const session = await getAuthSession();
  // const primaryColor = session?.primaryColor || "#8DBF41";
  // const response = await axios.get(
  //   process.env.NEXT_PUBLIC_APP_URL + "/api/user"
  // );
  // const data = response?.data;
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
    // <div className="h-screen text-black">
    //   <Navbar primaryColor={primaryColor} data={data} />
    //   <MainSection topSection={get(data, "topSection")} />
    //   <SkillsSection skills={get(data, "skills")} />
    //   <AboutSection about={get(data, "about")} />
    //   <Projects projects={get(data, "projects")} />
    //   <Contact contact={get(data, "contactUs")} />
    // </div>
  );
}
