import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Invoice Extractor",
    slug: "ai-invoice-extractor",
    day: "Day 1 / 30",
    description:
      "A webhook-driven AI pipeline that turns PDF invoices into structured, validated records and logs clean results to Google Sheets.",
    category: "AI Automation",
    featured: true,
    thumbnail: "/projects/ai-invoice-extractor-workflow.svg",
    heroImage: "/projects/ai-invoice-extractor-workflow.svg",
    workflowImage: "/projects/ai-invoice-extractor-workflow.svg",
    jsonFile: "/projects/ai-invoice-extractor.json",
    problem:
      "Invoice processing is repetitive and easy to get wrong. Manually copying vendor details, dates, totals and line items into a spreadsheet creates unnecessary work and makes arithmetic or transcription errors harder to catch.",
    solution:
      "The workflow accepts a PDF through a webhook, extracts its text, uses an OpenRouter-backed LLM to produce structured invoice data, then validates required fields and invoice arithmetic before routing the result. Valid records are appended to Google Sheets; inconsistent or incomplete invoices are returned for manual review instead of being silently accepted.",
    overview:
      "Day 1 focuses on building a reliable extraction pipeline rather than simply asking an AI model to read a document. The important part is the validation layer: the workflow checks required fields, line-item math, subtotal reconciliation, and subtotal + tax = total before writing data to the spreadsheet.",
    workflowSteps: [
      "Receive an invoice PDF through a POST webhook.",
      "Extract text from the uploaded PDF.",
      "Send the invoice text to the LLM with a strict JSON schema and no-guessing rules.",
      "Normalize values and validate required fields and invoice arithmetic.",
      "Route valid data to Google Sheets or return a manual-review response with the validation reason."
    ],
    keyFeatures: [
      "Structured JSON extraction",
      "Required-field validation",
      "Line-item quantity × unit-price checks",
      "Subtotal and total reconciliation",
      "Google Sheets logging",
      "Manual-review fallback"
    ],
    limitations: [
      "Designed for text-based PDF invoices.",
      "Scanned or photographed invoices need a vision-capable extraction step.",
      "Credentials and production webhook configuration are intentionally excluded from the public JSON."
    ],
    technologies: ["n8n", "OpenRouter", "Google Sheets", "Webhooks", "PDF Parser"],
    githubUrl: "#",
    demoUrl: "#",
    screenshots: ["/projects/ai-invoice-extractor-workflow.svg"],
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
      "An AI agent that takes a content brief or topic, generates platform-specific posts, schedules them, and tracks engagement metrics in a central dashboard.",
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
      "Professionals spend hours managing email. Many replies follow predictable patterns, yet manual effort is still required for each message.",
    solution:
      "A smart email workflow that monitors an inbox, classifies messages by intent and urgency, drafts context-aware replies using AI, and escalates urgent items.",
    technologies: ["n8n", "OpenAI", "Gmail", "Slack", "Google Sheets"],
    githubUrl: "#",
    demoUrl: "#",
    screenshots: [],
  },
];
