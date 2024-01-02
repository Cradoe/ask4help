import type { Metadata } from "next";
import "./globals.css";
import { Header } from "components/header";
import { workSans } from "lib/font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
