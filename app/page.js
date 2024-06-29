import Homepage from "./components1/homepage";
import axios from "axios";
import { headers } from "next/headers";

async function Home() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  // console.log("domain", domain);
  let value = "";
  if (process.env.NODE_ENV == "dev") {
    value = domain;
  } else {
    const subdomain = domain.split(".")?.[0];
    // console.log("Subdomain:", subdomain);
    value = subdomain;
  }
  const response = await axios.get(
    `${process.env.ADMIN_DASHBOARD_API_URL}/api/portfolio?subdomain=${value}`
  );
  const data = response?.data.data;
  return <Homepage data={data} />;
}

export default Home;
