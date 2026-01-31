import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-management-system.roboticela.com";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Restaurant Management System team. Send us a message, report bugs, request features, or ask questions.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: new URL('/contact', siteUrl).toString(),
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

