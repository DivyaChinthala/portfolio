import { getAuthSession } from "../api/auth/[...nextauth]/route";
import Navigation from "./navigation";
import MainSection from "./mainSection";

export default async function Homepage() {
  const session = await getAuthSession();
  const primaryColor = session?.primaryColor || "#854408";
  return (
    <div className="bg-white h-screen">
      <div className="navbar pl-8 pr-6 py-4">
        <div className="flex-1">
          <a className="font-medium no-underline text-black text-4xl">
            <span style={{ color: primaryColor, fontWeight: 700 }}></span>
            <span></span>
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
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainSection />
    </div>
  );
}
