import { redirect } from "next/navigation";
import { Inter } from "next/font/google";
import AdminNavigation from "../components/adminNavigation";
import { getAuthSession } from "../api/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default async function AdminDashboardLayout({ children }) {
  const session = await getAuthSession();
  //   console.log("admin", session);
  if (!session?.user?.email) {
    redirect("/login");
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen overflow-scroll">
          <AdminNavigation />
          {children}
        </div>
      </body>
    </html>
  );
}
