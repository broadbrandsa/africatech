import { SectionHeading } from "@/components/sections/section-heading";
import { event, speakers } from "@/content/site";

export function Speakers() {
  return (
    <section className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="04"
          eyebrow="On stage"
          title={speakers.h2}
        />
        <p className="mt-6 text-lg font-semibold text-brand">{speakers.stat}</p>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {speakers.items.map((item) => (
            <li key={item.name} className="bg-background p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold">{item.name}</h3>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">
                {item.role}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground/90">
                {item.org}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted-foreground">
          {speakers.footnote}{" "}
          <a
            href={event.website}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            {speakers.footnoteLinkLabel}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
