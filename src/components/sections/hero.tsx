import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DSG_LOGO, hero, MAILTO } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="grain relative flex min-h-svh flex-col overflow-hidden">
      <Image
        src={hero.image}
        alt="Crowds arriving at Africa Tech Festival 2025, CTICC Cape Town"
        fill
        priority
        className="object-cover object-center brightness-[0.5] saturate-[0.85]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/45 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-background/70 via-transparent to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-6 pt-24 pb-16 sm:pb-24">
        <Image
          src={DSG_LOGO}
          alt="DSG — Digital Solutions Group"
          width={200}
          height={81}
          priority
          className="animate-rise h-10 w-auto self-start object-contain sm:h-12"
        />
        <p
          className="animate-rise mt-6 text-xs font-semibold tracking-[0.3em] uppercase text-brand sm:text-sm"
          style={{ animationDelay: "50ms" }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="animate-rise mt-5 max-w-4xl font-heading text-5xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "100ms" }}
        >
          {hero.h1}
        </h1>
        <p
          className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          {hero.sub}
        </p>

        <div
          className="animate-rise mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "300ms" }}
        >
          <Button
            asChild
            size="lg"
            className="h-12 px-6 text-base font-semibold"
          >
            <a href={MAILTO}>
              <Mail data-icon="inline-start" />
              {hero.primaryCta}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-foreground/25 bg-transparent px-6 text-base backdrop-blur-sm hover:bg-foreground/10"
          >
            <a href="#offer">
              {hero.secondaryCta}
              <ArrowDown data-icon="inline-end" />
            </a>
          </Button>
        </div>

        <ul
          className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-foreground/15 pt-6 text-sm text-foreground/90"
          style={{ animationDelay: "400ms" }}
        >
          {hero.badges.map((badge) => (
            <li key={badge} className="flex items-center gap-2 font-medium">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
