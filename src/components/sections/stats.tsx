import { event, stats } from "@/content/site";

export function Stats() {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {stats.h2}
        </h2>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border lg:grid-cols-4">
          {stats.items.map((item) => (
            <div key={item.label} className="bg-card p-6 sm:p-8">
              <dd className="font-heading text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
                {item.value}
              </dd>
              <dt className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm text-muted-foreground">{stats.mix}</p>

        <p className="mt-4 text-lg font-medium">
          {stats.kicker}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            ({stats.source}{" "}
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              africatechfestival.com
            </a>
            )
          </span>
        </p>
      </div>
    </section>
  );
}
