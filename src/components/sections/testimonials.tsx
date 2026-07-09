import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="07"
          eyebrow="The industry on ATF"
          title={testimonials.h2}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col rounded-xl border bg-background p-7 sm:p-8">
                <span
                  className="font-heading text-6xl leading-none font-extrabold text-brand"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-base leading-relaxed text-foreground/90">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t pt-4">
                  <p className="font-heading font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted-foreground">
          <a
            href={testimonials.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            {testimonials.source}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
