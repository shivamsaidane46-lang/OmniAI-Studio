import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://omniaistudio.in";
const siteDescription =
  "OmniAI Studio builds AI automation systems, n8n workflows, AI agents, API integrations, and business process automations for real-world operations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OmniAI Studio | AI Automation & n8n Workflows",
    template: "%s | OmniAI Studio",
  },
  description: siteDescription,
  applicationName: "OmniAI Studio",
  authors: [{ name: "OmniAI Studio" }],
  creator: "OmniAI Studio",
  publisher: "OmniAI Studio",
  category: "Technology",
  keywords: [
    "AI automation",
    "AI automation agency",
    "n8n automation",
    "n8n workflows",
    "AI agents",
    "business process automation",
    "workflow automation",
    "API integration",
    "AI systems",
    "automation services India",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "OmniAI Studio",
    title: "OmniAI Studio | AI Automation & n8n Workflows",
    description: siteDescription,
    locale: "en_IN",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "OmniAI Studio — AI Automation & Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniAI Studio | AI Automation & n8n Workflows",
    description: siteDescription,
    images: ["/brand/logo.png"],
  },
  icons: {
    icon: "/brand/logo-emblem.png",
    apple: "/brand/logo-emblem.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "OmniAI Studio",
      url: siteUrl,
      logo: `${siteUrl}/brand/logo-emblem.png`,
      description: siteDescription,
      email: "work@omniaistudio.in",
      areaServed: "Worldwide",
      knowsAbout: [
        "AI automation",
        "n8n workflows",
        "AI agents",
        "business process automation",
        "API integration",
        "workflow automation",
      ],
      sameAs: [
        "https://github.com/shivamsaidane46-lang",
        "https://in.linkedin.com/in/shivam-saidane-594217242",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "OmniAI Studio",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
