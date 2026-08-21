import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Projects & n8n Workflows",
  description:
    "Explore OmniAI Studio projects: AI automations, n8n workflows, intelligent agents, API integrations, and systems built to solve real business problems.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "AI Automation Projects & n8n Workflows | OmniAI Studio",
    description:
      "Explore AI automations, n8n workflows, intelligent agents, API integrations, and business systems built by OmniAI Studio.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
