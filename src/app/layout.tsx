import type { Metadata, Viewport } from "next";
import { Archivo, Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSG × Africa Tech Festival 2026 — Co-Sponsor Invitation",
  description:
    "Share DSG's stand at Africa Tech Festival 2026, 17–19 November, CTICC Cape Town. Co-sponsor at £5,000 each. One price, zero logistics, full festival presence.",
  openGraph: {
    title: "DSG × Africa Tech Festival 2026 — Co-Sponsor Invitation",
    description:
      "£5,000 each. Share DSG's stand at Africa's biggest tech event — 17–19 November 2026, CTICC Cape Town.",
    images: ["/images/event-imagery/atf-2025-entrance-crowd.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#C51F24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
