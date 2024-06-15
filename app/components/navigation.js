"use client";

import { get } from "lodash";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navigation() {
  const { data: session, update } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!session) {
      createSession();
    } else {
      update({
        activeNavItem: "home",
      });
    }
  }, []);

  const createSession = async () => {
    await signIn("credentials", {
      redirect: false,
    });
  };

  const activeNavItem = get(session, "activeNavItem", "home");
  const primaryColor = get(session, "primary", "#a991f7");

  const onClickNavItem = (key) => {
    update({
      activeNavItem: key,
    });
  };

  const toggleMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <div className="flex gap-8 relative">
      {/* Regular Navigation for large screens */}
      <p
        className={`font-medium no-underline cursor-pointer hidden md:block`}
        style={
          activeNavItem == "home"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
        onClick={() => onClickNavItem("home")}
      >
        <a href="#home">Home</a>
      </p>
      <p
        className="font-medium no-underline cursor-pointer hidden md:block"
        onClick={() => onClickNavItem("about")}
        style={
          activeNavItem == "about"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        <a href="#about">About</a>
      </p>
      <p
        className="font-medium no-underline cursor-pointer hidden md:block"
        onClick={() => onClickNavItem("projects")}
        style={
          activeNavItem == "projects"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        <a href="#projects">Projects</a>
      </p>
      <p
        className="font-medium no-underline cursor-pointer hidden md:block"
        onClick={() => onClickNavItem("contact")}
        style={
          activeNavItem == "contact"
            ? { borderBottom: `2px solid ${primaryColor}`, color: primaryColor }
            : {}
        }
      >
        Contact
      </p>

      {/* Dropdown Menu for small and medium screens */}
      <div className="relative md:hidden">
        <MdMenu
          className="cursor-pointer block"
          size={25}
          onClick={() => toggleMenu()}
        />
        {showMenu && (
          <ul
            className="absolute menu right-0 mt-2 text-black bg-white rounded-box "
            onMouseLeave={() => setShowMenu(false)}
          >
            <li>
              <a
                className={`font-medium no-underline cursor-pointer block ${
                  activeNavItem == "home" ? "text-primary" : ""
                }`}
                onClick={() => {
                  onClickNavItem("home");
                  toggleMenu();
                }}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`font-medium no-underline cursor-pointer block ${
                  activeNavItem == "about" ? "text-primary" : ""
                }`}
                onClick={() => {
                  onClickNavItem("about");
                  toggleMenu();
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`font-medium no-underline cursor-pointer block ${
                  activeNavItem == "projects" ? "text-primary" : ""
                }`}
                onClick={() => {
                  onClickNavItem("projects");
                  toggleMenu();
                }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={`font-medium no-underline cursor-pointer block ${
                  activeNavItem == "contact" ? "text-primary" : ""
                }`}
                onClick={() => {
                  onClickNavItem("contact");
                  toggleMenu();
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
