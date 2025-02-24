import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/sidebar";
import { NavBar } from "./components/nav-bar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Wagmi",
  description: "Helping you connect user's wallets seamlessly with Wagmi",
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
        <div className="d-flex">
          <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
              <Link href='/' className='text-white block w-full'>
                  Archax Interface
              </Link>
            </div>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800">
              <Sidebar />
            </div>
          </aside>
          <div className="sm:ml-64">
              <NavBar />
          </div>
          <div className="sm:ml-64 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
