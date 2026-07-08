import Image from "next/image";

import { SectionHeading } from "@/components/sections/section-heading";
import { proven } from "@/content/site";

export function Proven() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="04"
          eyebrow="Proven model"
          title={proven.h2}
        />
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          {proven.body}
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-4">
          {proven.logos.map((logo) => (
            <li
              key={logo.name}
              className="flex items-center justify-center bg-white p-6 sm:p-8"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} — past co-exhibitor on the DSG stand`}
                width={140}
                height={48}
                className="h-9 w-auto object-contain opacity-90 transition-opacity duration-200 hover:opacity-100"
              />
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {proven.gallery.map((photo, i) => (
            <figure
              key={photo.src}
              className={`relative overflow-hidden rounded-xl border ${
                i === 0 ? "aspect-4/3 sm:col-span-2 sm:aspect-auto" : "aspect-4/3"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
