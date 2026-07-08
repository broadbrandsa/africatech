import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  eyebrow,
  title,
  className,
}: {
  number: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="flex items-baseline gap-3 text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
        <span className="font-mono text-brand">{number}</span>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
