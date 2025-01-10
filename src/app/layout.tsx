import "~/styles/globals.css";

import { type Metadata } from "next";
import { Toaster } from "sonner";
import { Montserrat_Alternates } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Thumbnail Generator",
  description: "Generate thumbnail with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const monsterrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${monsterrat.className}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
