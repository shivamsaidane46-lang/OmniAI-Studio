import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniAI Studio — AI Automation & Systems",
  description: "AI automations, n8n workflows, and intelligent business systems built for real-world problems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
