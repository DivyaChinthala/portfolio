"use client";

import { get } from "lodash";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Navigation() {
  const { data: session, update } = useSession();
  useEffect(() => {
    if (!session) {
      createSession();
    }
  }, []);
  const createSession = async () => {
    const result = await signIn("credentials", {
      redirect: false,
    });
  };
  const activeNavItem = get(session, "activeNavItem", "home");
  const primaryColor = get(session, "primaryColor", "#a991f7");
  const onClickNavItem = (key) => {
    update({
      activeNavItem: key,
    });
  };
  return (
    <div className="flex-1 gap-8">
      <p
        className={`font-medium no-underline text-black textbase text-primary-content cursor-pointer`}
        style={
          activeNavItem == "home"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
        onClick={() => onClickNavItem("home")}
      >
        Home
      </p>
      <p
        className="font-medium no-underline text-black textbase cursor-pointer"
        onClick={() => onClickNavItem("about")}
        style={
          activeNavItem == "about"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        About
      </p>
      <p
        className="font-medium no-underline text-black textbase cursor-pointer"
        onClick={() => onClickNavItem("services")}
        style={
          activeNavItem == "services"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        Services
      </p>
      <p
        className="font-medium no-underline text-black textbase cursor-pointer"
        onClick={() => onClickNavItem("portfolio")}
        style={
          activeNavItem == "portfolio"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        Portfolio
      </p>
      <p
        className="font-medium no-underline text-black textbase cursor-pointer"
        onClick={() => onClickNavItem("contact")}
        style={
          activeNavItem == "contact"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        Contact
      </p>
    </div>
  );
}
