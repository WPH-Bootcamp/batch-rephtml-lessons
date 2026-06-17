import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata: Metadata = {
  title: "Next.js Basic",
  description: "Belajar next.js basic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout children={children} />
      </body>
    </html>
  );
}
