import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./pages/Header";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarApp from "./pages/sidebar/SidebarApp";
import Home from "./Home/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caped",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            {/* Sidebar */}
            <SidebarApp />

            {/* Main content */}
            <div className="flex flex-col px-0 lg:px-24 flex-1">
              <Header />
             
              <main className="pt-24 px-4 sm:px-6 lg:px-10">
                {children}
              </main>

              {/* <div className="
              ">
                 <Home />
              </div> */}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
  