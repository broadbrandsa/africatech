import { SectionHeading } from "@/components/sections/section-heading";
import { steps } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="11" eyebrow="Four steps" title={steps.h2} />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((step, i) => (
            <li key={step.title} className="bg-card p-6 sm:p-8">
              <span
                className="font-heading text-5xl font-extrabold text-brand/50"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
