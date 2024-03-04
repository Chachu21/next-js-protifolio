import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portifolio",
  description: "this portifolio is created by chalachew tsegaye, I am a software engineer",
  icons: [
    {
      rel: "icon",
      type: "image/jpg",
      sizes: "32x32",
      url: "/me.jpg",
    },  
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
