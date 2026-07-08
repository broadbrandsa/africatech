import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { audience } from "@/content/site";

export function Audience() {
  // Duplicated list drives the seamless marquee loop
  const marquee = [...audience.companies, ...audience.companies];

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              number="02"
              eyebrow="The audience"
              title={audience.h2}
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {audience.body}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {audience.body2}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {audience.pillars.map((pillar) => (
                <li key={pillar}>
                  <Badge
                    variant="outline"
                    className="h-auto px-3 py-1 text-xs font-medium"
                  >
                    {pillar}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-xl border">
            <Image
              src={audience.image}
              alt="Busy show floor at Africa Tech Festival"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-16 border-y bg-card py-5">
        <div
          className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap"
          aria-hidden
        >
          {marquee.map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="flex items-center gap-10 font-heading text-lg font-semibold text-foreground/70"
            >
              {company}
              <span className="size-1 rounded-full bg-brand" />
            </span>
          ))}
        </div>
        <p className="sr-only">
          Companies on the 2025 attendee list include:{" "}
          {audience.companies.join(", ")}.
        </p>
      </div>
      <p className="mx-auto mt-5 max-w-6xl px-6 text-sm font-medium text-muted-foreground">
        <span className="text-brand">{audience.companiesStat}</span> Names from
        the official 2025 attendee list.
      </p>

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
          {audience.confirmed2026Label}
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed font-medium text-foreground/90">
          {audience.confirmed2026.join(" · ")}{" "}
          <span className="text-muted-foreground">
            {audience.confirmed2026Suffix}
          </span>
        </p>
      </div>
    </section>
  );
}
