import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./components/appLayout";
import { getAuthSession } from "./api/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout session={session}>{children}</AppLayout>
      </body>
    </html>
  );
}
