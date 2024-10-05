import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PackPal.AI',
  description: 'An amazing tool for moving companies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
