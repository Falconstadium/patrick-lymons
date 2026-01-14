import type { Metadata } from "next";
import SmoothScrollGSAP from "../components/ui/smoothscroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick Lyons",
  description: "Fitness Coach from Austin, Texas",
  keywords: [
    "Patrick Lyons, Fitness coach in Austin, Fitness coach Texas, Fitness online coach",
  ],
  metadataBase: new URL("https://patrick-lymons.vercel.app/"),
  openGraph: {
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Patrick Lyons",
        type: "image/png",
      },
    ],
  },
  twitter: {
    title: "Patrick Lyons",
    description: "Fitness Coach from Austin, Texas",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-gray-50 antialiased">
        <SmoothScrollGSAP />
        {children}
      </body>
    </html>
  );
}
