import { marketMoment } from "@/content/site";

export function MarketMoment() {
  return (
    <section className="grain relative border-t bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
          {marketMoment.themeLabel}
        </p>
        <p className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-brand sm:text-4xl">
          &ldquo;{marketMoment.theme}&rdquo;
        </p>

        <blockquote className="mt-10 text-lg leading-relaxed text-balance text-foreground/90 sm:text-xl">
          &ldquo;{marketMoment.quote}&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">
          — {marketMoment.attribution}
        </p>

        <p className="mx-auto mt-12 max-w-2xl border-t pt-8 text-sm leading-relaxed text-muted-foreground">
          {marketMoment.media}
        </p>
      </div>
    </section>
  );
}
