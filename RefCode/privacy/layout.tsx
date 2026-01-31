import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-management-system.roboticela.com";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Restaurant Management System. Learn how we handle your data - we collect nothing, all data is stored locally on your device.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: new URL('/privacy', siteUrl).toString(),
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

