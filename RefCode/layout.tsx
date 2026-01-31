import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-management-system.roboticela.com";

export const metadata: Metadata = {
  title: {
    default: "Restaurant Management System - Modern POS Solution",
    template: "%s - Restaurant Management System"
  },
  icons: {
    icon: "/Favicon.png",
  },
  description: "A comprehensive, open-source desktop application for managing restaurant operations including sales, inventory, analytics, and more. Free, fast, and privacy-focused. Available for Windows, Linux, macOS, iOS, and Android.",
  keywords: [
    "restaurant management",
    "POS system",
    "point of sale",
    "restaurant software",
    "inventory management",
    "analytics",
    "open source",
    "cross-platform",
    "offline POS",
    "restaurant analytics",
    "sales management",
    "free POS system",
    "AGPL license"
  ],
  authors: [{ name: "Roboticela" }],
  creator: "Roboticela",
  publisher: "Roboticela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: new URL(siteUrl).toString(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Restaurant Management System",
    title: "Restaurant Management System - Modern POS Solution",
    description: "A comprehensive, open-source desktop application for managing restaurant operations. Free, fast, and privacy-focused.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Management System - Modern POS Solution",
    description: "A comprehensive, open-source desktop application for managing restaurant operations. Free, fast, and privacy-focused.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {clarityId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
