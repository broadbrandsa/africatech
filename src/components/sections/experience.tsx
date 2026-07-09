import Image from "next/image";

import { SectionHeading } from "@/components/sections/section-heading";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="08"
          eyebrow="Festival week"
          title={experience.h2}
        />

        <ul className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {experience.items.map((item, i) => (
            <li key={item.src} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-xl border">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={i % 2 === 0 ? 480 : 420}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/50 to-transparent p-4 pt-10 text-sm leading-snug text-white">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted-foreground">{experience.note}</p>
      </div>
    </section>
  );
}
