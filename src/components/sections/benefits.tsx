import Image from "next/image";

import { SectionHeading } from "@/components/sections/section-heading";
import { benefits } from "@/content/site";

export function Benefits() {
  return (
    <section className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="05"
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
      </div>
    </section>
  );
}
