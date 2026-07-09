# Structure

## Folder structure

```
src/app/                    # App Router; single page.tsx composing section components
src/components/sections/    # One file per page section
src/components/ui/          # shadcn primitives only — do not hand-edit styles here
src/content/                # Typed content objects (facts, offer, FAQ)
src/lib/                    # Utilities (cn)
docs/                       # This documentation
public/images/              # Assets copied from the site-content pack
```

## Section composition rules

- `src/app/page.tsx` composes the page from section components only — no inline copy.
- One file per section in `src/components/sections/`:
  `hero.tsx`, `stats.tsx`, `anchor-events.tsx`, `audience.tsx`, `speakers.tsx`, `offer.tsx`, `proven.tsx`, `testimonials.tsx`, `experience.tsx`, `benefits.tsx` (includes 8-stages accordion), `about-dsg.tsx`, `how-it-works.tsx`, `faq.tsx`, `market-moment.tsx`, `cta.tsx`, `footer.tsx` — plus shared `section-heading.tsx`, the client-side `site-nav.tsx` (sticky nav) and `floorplan-dialog.tsx` (lightbox).
- Sections consume content via imports from `src/content/` — **no hard-coded stats inside components**.

## Content management approach

- All copy, stats and offer terms live in typed content objects under `src/content/`, so copy edits never touch component code.
- Every stat traces back to a file in the source content pack (`02-EVENT-FACTS.md`, `05-AUDIENCE-DATA.md`, `06-DSG-PROFILE.md`). Never invent numbers.
- Images live in `public/images/` keeping the content pack's subfolder structure (`event-imagery/`, `dsg-stand-photos/`, `logos/`, `floorplans/`).
