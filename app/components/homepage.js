import { getAuthSession } from "../api/auth/[...nextauth]/route";
import Navigation from "./navigation";
import MainSection from "./mainSection";
import axios from "axios";
import Logo from "../components/logo";
import { get } from "lodash";

export default async function Homepage() {
  const session = await getAuthSession();
  const primaryColor = session?.primaryColor || "#854408";
  const response = await axios.get(
    process.env.NEXT_PUBLIC_APP_URL + "/api/user"
  );
  const data = response?.data;
  return (
    <div className="h-screen">
      <div className="navbar pl-8 pr-6 py-4">
        <div className="flex-1">
          <a className="font-medium no-underline text-black text-4xl">
            <span style={{ color: primaryColor, fontWeight: 700 }}></span>
            <Logo profile={get(data, "profile")} />
          </a>
        </div>
        <Navigation />
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={get(data, "profile.profilePicture", "")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainSection topSection={get(data, "topSection")} />
    </div>
  );
}
