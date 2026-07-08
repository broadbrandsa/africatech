import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/section-heading";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading number="08" eyebrow="FAQ" title={faq.h2} />

        <Accordion type="single" collapsible className="mt-10">
          {faq.items.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="py-5 font-heading text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
