import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { disclaimer, dsg, event, finalCta, MAILTO } from "@/content/site";

export function Cta() {
  return (
    <section className="grain relative overflow-hidden border-t bg-brand py-24 text-white sm:py-32">
      <div
        className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-5xl font-extrabold tracking-tight text-balance sm:text-7xl">
          {finalCta.h2}
        </h2>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="h-14 bg-white px-8 text-base font-semibold text-brand hover:bg-white/90"
          >
            <a href={MAILTO}>
              <Mail data-icon="inline-start" />
              {finalCta.cta}
            </a>
          </Button>
        </div>
        <div className="mx-auto mt-14 max-w-2xl space-y-3 text-xs leading-relaxed text-white/70">
          <p>{disclaimer}</p>
          <p>
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              Africa Tech Festival
            </a>{" "}
            is organised by Informa. DSG is an independent exhibitor; this
            invitation is issued by DSG (
            <a
              href={dsg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              dsg.co.za
            </a>
            ).
          </p>
        </div>
      </div>
    </section>
  );
}
