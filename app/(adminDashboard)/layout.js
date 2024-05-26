import { redirect } from "next/navigation";
import { getAuthSession } from "../api/auth/[...nextauth]/route";
import { Inter } from "next/font/google";
import AdminNavigation from "../components/adminNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
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
