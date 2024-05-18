"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  return (
    <div className="flex items-end justify-end p-3">
      <button className="btn btn-error btn-sm" onClick={onLogout}>
        {loading && (
          <span className="loading loading-spinner loading-md"></span>
        )}{" "}
        Logout
      </button>
    </div>
  );
}
