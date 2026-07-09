import { SectionHeading } from "@/components/sections/section-heading";
import { anchorEvents } from "@/content/site";

export function AnchorEvents() {
  return (
    <section id="event" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          number="02"
          eyebrow="The festival"
          title={anchorEvents.h2}
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {anchorEvents.items.map((item) => (
            <li key={item.name} className="bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg font-semibold text-brand">
          {anchorEvents.kicker}
        </p>

        <ol className="mt-14 grid gap-8 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {anchorEvents.timeline.map((item) => (
            <li key={item.title} className="relative pl-5">
              <span
                className="absolute top-1.5 left-0 size-2 rounded-full bg-brand"
                aria-hidden
              />
              <p className="font-mono text-xs tracking-wide text-brand uppercase">
                {item.when}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-xl border bg-card p-6 text-sm leading-relaxed text-foreground/90 sm:text-base">
          {anchorEvents.coSponsorDays}
        </p>
      </div>
    </section>
  );
}
