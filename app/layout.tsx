import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Script from 'next/script';

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.CHIPP_APP_URL = "https://packpalai-15056.chipp.ai";
          window.CHIPP_APP_ID = 15056;
        `,
          }}
        />

        <link
          rel="stylesheet"
          href="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css"
        />

        <script
          defer
          src="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js"
        ></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
