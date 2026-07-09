"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, MAILTO } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The hero renders with id="top"; the nav appears once it scrolls away.
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.15),
      { threshold: [0, 0.15] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      )}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-heading text-sm font-bold tracking-tight whitespace-nowrap"
        >
          DSG <span className="text-brand">×</span> ATF 2026
        </a>
        <ul className="hidden items-center gap-6 sm:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-100 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="sm" className="font-semibold">
          <a href={MAILTO}>
            <Mail data-icon="inline-start" />
            {nav.cta}
          </a>
        </Button>
      </nav>
    </header>
  );
}
