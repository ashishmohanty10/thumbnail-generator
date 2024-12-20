import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/components/dashboard/navbar";

export const metadata: Metadata = {
  title: "Thumbnail Generator",
  description: "Generate thumbnail with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="en" className={`${GeistSans.className}`}>
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </div>
  );
}
