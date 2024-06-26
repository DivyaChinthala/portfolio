import { redirect } from "next/navigation";
import { Inter } from "next/font/google";
import { getAuthSession } from "../api/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login",
  description: "Generated by create next app",
};

export default async function AuthLayout({ children }) {
  const session = await getAuthSession();
  if (session?.user?.email && session?.user?.password) {
    redirect("/admin");
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
