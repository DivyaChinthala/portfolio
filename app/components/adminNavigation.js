"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminNavigation() {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onLogout = () => {
    setLoading(true);
    update({
      updateType: "LOGOUT",
    }).then(() => {
      setLoading(false);
      router.push("/login");
    });
  };
  const pathname = usePathname();
  const primaryColor = session?.primaryColor;
  return (
    <div className="flex gap-4 items-center justify-end p-3">
      <Link href={"/admin"}>
        <p
          className="text-sm font-medium cursor-pointer"
          style={
            pathname == "/admin"
              ? { borderBottom: `2px solid ${primaryColor}` }
              : {}
          }
        >
          Home
        </p>
      </Link>
      <Link href={"/top-section"}>
        <p
          className="text-sm font-medium cursor-pointer"
          style={
            pathname == "/top-section"
              ? { borderBottom: `2px solid ${primaryColor}` }
              : {}
          }
        >
          Top Section
        </p>
      </Link>
      <Link href="/about">
        <p
          className="text-sm font-medium cursor-pointer"
          style={
            pathname == "/about"
              ? { borderBottom: `2px solid ${primaryColor}` }
              : {}
          }
        >
          About
        </p>
      </Link>
      <Link href="/projects">
        <p
          className="text-sm font-medium cursor-pointer"
          style={
            pathname == "/projects"
              ? { borderBottom: `2px solid ${primaryColor}` }
              : {}
          }
        >
          Projects
        </p>
      </Link>
      <Link href="/contact-us">
        <p
          className="text-sm font-medium cursor-pointer"
          style={
            pathname == "/contact-us"
              ? { borderBottom: `2px solid ${primaryColor}` }
              : {}
          }
        >
          Contact Us
        </p>
      </Link>

      <button className="btn btn-error btn-sm" onClick={onLogout}>
        {loading && (
          <span className="loading loading-spinner loading-md"></span>
        )}{" "}
        Logout
      </button>
    </div>
  );
}
