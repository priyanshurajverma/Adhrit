import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Adhrit Technologies - Industrial Automation Solutions',
  description: 'Transform your manufacturing with intelligent automation, IoT solutions, and digital transformation services.',
  keywords: 'Industrial Automation, Machine Retrofit, Vision Systems, IoT, Digital Transformation, OEE, Manufacturing',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adhrittechnologies.in',
    siteName: 'Adhrit Technologies',
    title: 'Adhrit Technologies - Industrial Automation Solutions',
    description: 'Transform your manufacturing with intelligent automation, IoT solutions, and digital transformation services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#87CEEB" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
