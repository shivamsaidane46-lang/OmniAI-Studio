import { Service } from "../types";

export const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "End-to-end automation pipelines that eliminate repetitive manual work using AI-powered decision making and data processing.",
    icon: "Cpu",
    features: [
      "Document processing & extraction",
      "Automated data entry & validation",
      "Email & communication automation",
      "Custom AI-powered workflows",
    ],
  },
  {
    id: "n8n-workflows",
    title: "n8n Workflow Development",
    description:
      "Custom n8n workflows that connect your tools, automate processes, and keep your business running on autopilot.",
    icon: "Workflow",
    features: [
      "Multi-step workflow design",
      "Third-party API integrations",
      "Error handling & monitoring",
      "Workflow optimization & maintenance",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Intelligent agents that handle complex tasks autonomously — from lead qualification to customer support and content generation.",
    icon: "Bot",
    features: [
      "Conversational AI assistants",
      "Task-specific autonomous agents",
      "Multi-agent orchestration",
      "Custom knowledge bases",
    ],
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    description:
      "Seamless connections between your existing tools and platforms so data flows where it needs to, when it needs to.",
    icon: "Plug",
    features: [
      "REST & GraphQL integrations",
      "Webhook setup & management",
      "Data sync & transformation",
      "Authentication & security",
    ],
  },
];
