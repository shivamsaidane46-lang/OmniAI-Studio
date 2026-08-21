"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#challenge", label: "30 Days Challenge" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-custom bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/brand/logo-emblem.png"
            alt="OmniAI Studio"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-text-primary">
            OmniAI Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-purple-400 transition-colors rounded-lg hover:bg-surface"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-purple-400 hover:bg-surface transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Work With Me
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-purple-400 hover:bg-surface transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border-custom bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-text-secondary hover:text-purple-400 hover:bg-surface rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border-custom flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:text-purple-400 hover:bg-surface transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
