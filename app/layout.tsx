import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import ReduxProvider from "@/store/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <ReduxProvider>
              <SidebarTrigger />
              {children}
            </ReduxProvider>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
