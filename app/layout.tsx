import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


import NavBar from "@/components/NavBar";
import { AppSidebar } from "@/components/Appsidebar";
import { NewAppSidebar } from "@/components/NewAppSidebar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Library App",
  description: "Library for booking a book and journals",
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
        <ThemeProvider
         attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >          
            {children}          
        </ThemeProvider>
      </body>
    </html>
  );
}
