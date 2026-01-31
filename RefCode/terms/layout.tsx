import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-management-system.roboticela.com";

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the terms of use for Restaurant Management System. Licensed under AGPL-3.0. Free, open-source restaurant POS software.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: new URL('/terms', siteUrl).toString(),
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

