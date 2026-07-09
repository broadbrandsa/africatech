import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { dsg } from "@/content/site";

export function AboutDsg() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="10" eyebrow="Your host" title={dsg.h2} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="leading-relaxed text-muted-foreground">{dsg.body}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {dsg.clients}
            </p>
            <Button
              asChild
              variant="link"
              className="mt-6 h-auto p-0 text-base text-brand"
            >
              <a href={dsg.url} target="_blank" rel="noopener noreferrer">
                {dsg.urlLabel}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>

          <dl className="grid grid-cols-2 gap-x-12 gap-y-8">
            {dsg.stats.map((stat) => (
              <div key={stat.label} className="max-w-40">
                <dd className="font-heading text-4xl font-extrabold tracking-tight text-brand">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 border-t pt-10">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
            {dsg.brandsLabel}
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6">
            {dsg.brands.map((brand) => (
              <li key={brand.name}>
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="h-7 w-auto object-contain opacity-75 transition-opacity duration-100 hover:opacity-100 sm:h-8"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
