"use client";
import Navigation from "./navigation";
import Logo from "../components/logo";
import { get } from "lodash";

export default function Navbar({ primaryColor, data }) {
  return (
    <div
      className={`navbar pl-8 pr-6 py-4 fixed top-0 left-0 right-0 text-white`}
      style={{ backgroundColor: "#034959" }}
    >
      {" "}
      <div className="flex-1">
        <a className="font-medium no-underline text-black text-4xl">
          <span style={{ color: primaryColor, fontWeight: 700 }}></span>
          <Logo profile={get(data, "profile")} />
        </a>
      </div>
      <div className="flex-none gap-8">
        <Navigation />
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
  );
}
