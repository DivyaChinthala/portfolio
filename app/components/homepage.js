import MainSection from "./mainSection";
import axios from "axios";
import { get } from "lodash";
import SkillsSection from "./skills";
import AboutSection from "./aboutSection";
import Projects from "./projects";
import Contact from "./contact";
import Navbar from "./navbar";
import { getAuthSession } from "../api/authOptions";

export default async function Homepage() {
  const session = await getAuthSession();
  const primaryColor = session?.primaryColor || "#3498DB";
  const response = await axios.get(
    process.env.NEXT_PUBLIC_APP_URL + "/api/user"
  );
  const data = response?.data;
  return (
    <div className="h-screen">
      <Navbar primaryColor={primaryColor} data={data} />
      <MainSection topSection={get(data, "topSection")} />
      <SkillsSection skills={get(data, "skills")} />
      <AboutSection about={get(data, "about")} />
      <Projects projects={get(data, "projects")} />
      <Contact contact={get(data, "contactUs")} />
    </div>
  );
}
