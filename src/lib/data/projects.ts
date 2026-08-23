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
    githubUrl: "https://github.com/shivamsaidane46-lang/OmniAI-Studio/blob/main/public/projects/ai-invoice-extractor.json",
    demoUrl: "#",
    screenshots: ["/projects/ai-invoice-extractor-workflow.svg"],
  },
  {
    id: "2",
    title: "Lead Capture, AI Scoring & Routing Engine",
    slug: "lead-capture-ai-scoring-routing-engine",
    day: "Day 2 / 30",
    description:
      "A production-minded lead operations workflow that captures inbound leads, enriches company data, scores prospects with AI, and routes hot, medium, and cold leads automatically.",
    category: "AI Automation",
    featured: true,
    thumbnail: "/projects/day-02-lead-capture-workflow.svg",
    heroImage: "/projects/day-02-lead-capture-workflow.svg",
    workflowImage: "/projects/day-02-lead-capture-workflow.svg",
    jsonFile: "/projects/day-02-lead-capture-ai-scoring-routing-engine.json",
    problem:
      "Inbound leads often arrive with incomplete context, and sales teams can waste valuable time manually researching companies, deciding which prospects matter, and deciding who should follow up. Slow or inconsistent routing can also cause high-intent opportunities to go cold.",
    solution:
      "This workflow captures a lead from a webhook or Gmail, enriches the company profile through web research, evaluates the lead against a configurable knowledge base, and uses an AI scoring agent to produce a 0–100 qualification score. The routing layer then separates hot, medium, and cold leads and sends each segment to the appropriate follow-up and CRM path.",
    overview:
      "Day 2 moves from document automation into sales automation. The architecture combines lead capture, enrichment, AI qualification, retrieval from a Pinecone-backed knowledge base, and deterministic score-based routing. High-value leads receive immediate follow-up and CRM logging, medium leads are handed to the sales team for review, and cold leads are recorded without consuming unnecessary sales capacity.",
    workflowSteps: [
      "Capture inbound lead data from a form webhook or Gmail trigger.",
      "Research the submitted company URL and enrich the lead profile with public company information.",
      "Use the AI Lead Scorer with the current qualification rules retrieved from the Pinecone knowledge base.",
      "Generate a qualification score and route the lead by threshold: hot (75+), medium (25–74), or cold (<25).",
      "Send the appropriate follow-up, log the lead in the CRM/Google Sheets layer, and alert the sales team when immediate action is required."
    ],
    keyFeatures: [
      "Multi-source lead capture",
      "Automatic company enrichment",
      "AI lead scoring from 0–100",
      "Pinecone-backed qualification knowledge base",
      "Hot / medium / cold routing",
      "Immediate hot-lead follow-up",
      "CRM and Google Sheets logging",
      "Sales team Slack notification"
    ],
    limitations: [
      "Production credentials and private account connections are intentionally excluded from the public JSON.",
      "Company enrichment quality depends on the availability and quality of public web data.",
      "Scoring thresholds and qualification rules should be tuned to the target sales process before production use."
    ],
    technologies: ["n8n", "OpenRouter", "Google Gemini", "Pinecone", "Gmail", "Google Sheets", "Slack", "Google Drive", "Webhooks"],
    githubUrl: "https://github.com/shivamsaidane46-lang/OmniAI-Studio/blob/main/public/projects/day-02-lead-capture-ai-scoring-routing-engine.json",
    demoUrl: "#",
    screenshots: ["/projects/day-02-lead-capture-workflow.svg"],
  },
  {
    id: "3",
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
    id: "4",
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
    id: "5",
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
