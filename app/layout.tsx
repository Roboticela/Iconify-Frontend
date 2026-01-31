import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iconify - Generate App Icons for 25+ Platforms",
  description: "A powerful, privacy-focused tool to create perfectly-sized app icons for iOS, Android, Web, and 25+ platforms. Free and open source.",
  keywords: "app icons, icon generator, iOS icons, Android icons, PWA icons, web app icons, icon maker",
  authors: [{ name: "Roboticela" }],
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/Favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.ico",
    apple: "/icon.ico"
  },
  openGraph: {
    title: "Iconify - Generate App Icons for 25+ Platforms",
    description: "A powerful, privacy-focused tool to create perfectly-sized app icons for iOS, Android, Web, and 25+ platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
