import Image from "next/image";

import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={footer.logo}
            alt="DSG — Digital Solutions Group"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <span className="font-heading text-sm font-semibold text-brand">
            {footer.hashtag}
          </span>
        </div>

        <div className="text-sm leading-relaxed text-muted-foreground">
          <p>{footer.address}</p>
          <p className="mt-1 flex flex-wrap gap-x-4">
            <a href={footer.telHref} className="hover:text-foreground">
              {footer.tel}
            </a>
            <a
              href={footer.web}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {footer.webLabel}
            </a>
            <a
              href={footer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={footer.atfWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {footer.atfWebLabel}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Solutions Group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
