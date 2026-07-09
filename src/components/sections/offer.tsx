import { Check, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/sections/section-heading";
import { disclaimer, offer, MAILTO } from "@/content/site";

export function Offer() {
  return (
    <section id="offer" className="grain relative scroll-mt-16 border-y bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="05" eyebrow="The offer" title={offer.h2} className="mx-auto text-center" />

        <Card className="relative mx-auto mt-14 max-w-2xl overflow-hidden border-brand/40 bg-background shadow-[0_0_80px_-20px_rgba(197,31,36,0.45)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-brand" aria-hidden />
          <CardHeader className="pt-8 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Co-sponsor package
            </p>
            <p className="mt-3 font-heading text-7xl font-extrabold tracking-tight">
              {offer.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              all-in, per co-sponsor
            </p>
          </CardHeader>
          <CardContent>
            <Separator className="mb-6" />
            <ul className="space-y-4">
              {offer.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    aria-hidden
                  />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {offer.compare}
            </p>
          </CardContent>
          <CardFooter className="flex-col gap-4 pb-8">
            <Button
              asChild
              size="lg"
              className="h-12 w-full text-base font-semibold"
            >
              <a href={MAILTO}>
                <Mail data-icon="inline-start" />
                {offer.cta}
              </a>
            </Button>
            <p className="text-sm font-semibold text-brand">{offer.urgency}</p>
          </CardFooter>
        </Card>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
