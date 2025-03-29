import axios from "axios";
import TopSection from "./components/topSection";
import AboutMe from "./components/aboutMe";
import { get } from "lodash";

export default async function Home() {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_APP_URL + "/api/user"
  );
  const userData = get(response, "data", {});
  return (
    <div className="flex flex-col gap-4">
      <TopSection
        data={get(userData, "topSection")}
        location={get(userData, "location")}
      />
      <AboutMe data={get(userData, "about")} />
    </div>
  );
}
