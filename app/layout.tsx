import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Bullen | SoHo NYC Hairstylist for Hard-to-Manage Hair",
  description:
    "SoHo NYC hairstylist specializing in hard-to-manage hair, texture control, and cuts that work in real life. Book a haircut or learn how to manage your hair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "Samuel Bullen",
              address: {
                "@type": "PostalAddress",
                streetAddress: "469 Broadway, 4th Floor",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10013",
                addressCountry: "US",
              },
              areaServed: "SoHo NYC",
              url: "https://samuelbullen.com",
              sameAs: ["https://www.instagram.com/thesambullen"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
