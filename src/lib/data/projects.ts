import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Invoice Extractor",
    slug: "ai-invoice-extractor",
    description:
      "Automated invoice data extraction pipeline that reads PDF invoices, extracts key fields using AI, and populates Google Sheets for bookkeeping.",
    category: "AI Automation",
    featured: true,
    thumbnail: "/projects/invoice-extractor.svg",
    problem:
      "Small businesses spend hours manually entering invoice data into spreadsheets. The process is error-prone and doesn't scale as the volume of invoices grows.",
    solution:
      "An automated pipeline that watches a Gmail inbox for incoming invoices, extracts key fields (vendor, amount, date, line items) using an AI model, validates the data, and writes clean rows to Google Sheets — all without human intervention.",
    technologies: ["n8n", "OpenAI", "Google Sheets", "Gmail", "PDF Parser"],
    githubUrl: "#",
    demoUrl: "#",
    screenshots: [],
  },
  {
    id: "2",
    title: "AI Lead Qualification Bot",
    slug: "ai-lead-qualification-bot",
    description:
      "An intelligent agent that scores and qualifies inbound leads using AI, then routes them to the right sales rep automatically.",
    category: "AI Agents",
    featured: true,
    thumbnail: "/projects/lead-bot.svg",
    problem:
      "Sales teams waste time chasing unqualified leads. Without a systematic qualification process, high-value prospects get lost in the noise.",
    solution:
      "An AI-powered bot that analyzes inbound leads from web forms, scores them based on configurable criteria, and routes qualified leads to the appropriate sales rep via Slack and CRM updates.",
    technologies: ["n8n", "OpenAI", "Slack", "HubSpot", "Webhooks"],
    githubUrl: "#",
    demoUrl: "#",
    screenshots: [],
  },
  {
    id: "3",
    title: "Social Media Content Agent",
    slug: "social-media-content-agent",
    description:
      "An AI agent that generates, schedules, and posts social media content across multiple platforms from a single content brief.",
    category: "AI Agents",
    featured: true,
    thumbnail: "/projects/social-agent.svg",
    problem:
      "Creating consistent social media content across platforms is time-consuming. Entrepreneurs and small teams struggle to maintain a regular posting schedule.",
    solution:
      "An AI agent that takes a content brief or topic, generates platform-specific posts (LinkedIn, Twitter/X, Instagram captions), schedules them, and tracks engagement metrics in a central dashboard.",
    technologies: ["n8n", "OpenAI", "Buffer API", "Google Sheets", "Airtable"],
    githubUrl: "#",
    demoUrl: "#",
    screenshots: [],
  },
  {
    id: "4",
    title: "Smart Email Responder",
    slug: "smart-email-responder",
    description:
      "An AI-powered email assistant that drafts contextual replies, categorizes incoming mail, and escalates urgent messages.",
    category: "AI Automation",
    featured: true,
    thumbnail: "/projects/email-responder.svg",
    problem:
      "Professionals spend 2-3 hours daily managing email. Most replies follow predictable patterns, yet manual effort is required for every single message.",
    solution:
      "A smart email workflow that monitors your inbox, classifies messages by intent and urgency, drafts context-aware replies using AI, and puts them in your drafts folder for one-click sending. Urgent items trigger Slack notifications.",
    technologies: ["n8n", "OpenAI", "Gmail", "Slack", "Google Sheets"],
    githubUrl: "#",
    demoUrl: "#",
    screenshots: [],
  },
];
