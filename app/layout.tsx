// css
import "./globals.css";
// next
import type { Metadata } from "next";
// fonts
import { Inter } from "next/font/google";
// react query provider
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
// components
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "Dashboard | %s",
  },
  description: "Powerful Admin dashboard for E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <div>
            <Toaster position="top-center" />
          </div>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
