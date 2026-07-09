import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/section-heading";
import { benefits, stages } from "@/content/site";

export function Benefits() {
  return (
    <section className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="09"
          eyebrow="Your pass unlocks"
          title={benefits.h2}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ol className="space-y-0 divide-y divide-border border-y">
            {benefits.items.map((item, i) => (
              <li key={item.title} className="flex gap-5 py-5">
                <span className="font-mono text-sm text-brand" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid gap-6">
            {benefits.images.map((image) => (
              <figure
                key={image.src}
                className="relative aspect-16/9 overflow-hidden rounded-xl border"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-2xl font-bold tracking-tight">
            {stages.heading}
          </h3>
          <Accordion
            type="single"
            collapsible
            className="mt-6 rounded-xl border bg-background px-6"
          >
            {stages.items.map((stage, i) => (
              <AccordionItem key={stage.name} value={stage.name}>
                <AccordionTrigger className="py-4 font-heading text-base font-semibold hover:no-underline">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-brand" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {stage.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="ml-10 list-disc space-y-1.5 text-sm leading-relaxed text-muted-foreground marker:text-brand">
                    {stage.themes.map((theme) => (
                      <li key={theme}>{theme}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
