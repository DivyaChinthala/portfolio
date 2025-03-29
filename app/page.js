import axios from "axios";
import TopSection from "./components/topSection";
import { get } from "lodash";

export default async function Home() {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_APP_URL + "/api/user"
  );
  const userData = get(response, "data", {});
  return (
    <div>
      <TopSection data={get(userData, "topSection")} />
    </div>
  );
}
