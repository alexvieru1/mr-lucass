import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CurvedMenu } from "@/components/curved-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr Lucass Residence — Apartamente moderne în Constanța",
  description:
    "Ansamblu rezidențial Mr Lucass Residence din Constanța, zona Palazu Mare — apartamente de 2 și 3 camere și studio, finisaje moderne, balcon generos și locație liniștită, aproape de oraș.",
  keywords: [
    "Mr Lucass Residence",
    "Mr Lucass",
    "apartamente Constanța",
    "apartamente noi Constanța",
    "ansamblu rezidențial Palazu Mare",
    "2 camere Constanța",
    "3 camere Constanța",
    "studio Constanța",
    "locuințe noi Constanța",
  ],
  authors: [{ name: "Mr Lucass Residence", url: "https://mr-lucass.com" }],
  creator: "Mr Lucass Residence",
  metadataBase: new URL("https://mr-lucass.com"),
  openGraph: {
    title: "Mr Lucass Residence — Apartamente moderne în Constanța",
    description:
      "Descoperă ansamblul rezidențial Mr Lucass Residence din Constanța: apartamente luminoase de 2 și 3 camere și studio, cu finisaje moderne și balcon, în zona Palazu Mare.",
    url: "https://mr-lucass.com",
    siteName: "Mr Lucass Residence",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Mr Lucass Residence — Fațada și apartamentele ansamblului rezidențial din Constanța",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Lucass Residence — Apartamente moderne în Constanța",
    description:
      "Ansamblu rezidențial în Constanța, zona Palazu Mare, cu apartamente de 2 și 3 camere și studio, ideale pentru locuire sau investiție.",
    images: ["/og-image.webp"],
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CurvedMenu/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
