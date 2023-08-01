<<<<<<< HEAD
=======

>>>>>>> d8d5a7fef6a3fe4ad5929b48173a691962bb3c60
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/context/theme-provider";
// import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar/navbar";
import MovieFilter from "@/components/mfilters";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Next App",
  description: "a movie website to get imformation about leatest movies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem={true}>
          <div className="">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
