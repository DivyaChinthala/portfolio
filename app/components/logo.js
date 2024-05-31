"use client";
import { get } from "lodash";
import { useSession } from "next-auth/react";

export default function Logo({ profile }) {
  const { data: session } = useSession();
  const primaryColor = get(session, "primary", "#a991f7");
  return (
    <p className={`font-extrabold`} style={{ color: primaryColor }}>
      {get(profile, "logo")}
    </p>
  );
}
