import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "./icons";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#challenge", label: "30 Days Challenge" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com", icon: XTwitterIcon, label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-custom bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block group mb-3">
              <Image
                src="/brand/logo.png"
                alt="OmniAI Studio"
                width={160}
                height={107}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed max-w-xs">
              Building AI systems that automate real business problems. End-to-end
              automations, workflows, and intelligent agents.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-custom text-text-secondary hover:text-purple-400 hover:border-purple-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} OmniAI Studio. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Built with AI-powered precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
