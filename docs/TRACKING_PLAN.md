# Tracking Plan

## Google Analytics (placeholder)

- Env var: `NEXT_PUBLIC_GA_ID` (per environment, optional).
- When an ID is supplied, add the GA4 snippet in `src/app/layout.tsx`. Not installed at launch.

## Event tracking (placeholders)

| Event | Trigger | Params |
|---|---|---|
| `cta_email_click` | Any mailto CTA click | `section` (hero, offer, faq, final-cta, footer) |
| `faq_open` | FAQ accordion item opened | `question` |
| `scroll_depth` | 25/50/75/100% scroll | `percent` |

## Form submission tracking

Not applicable at launch — all conversions are mailto clicks. Placeholder: if an interest form is added later, track `form_submit` with source section.

## Vercel Analytics

Option: enable `@vercel/analytics` (zero-config) at launch — recommended as the minimum viable analytics layer.

## Conversion goals (placeholder)

- **Primary conversion:** mailto click to yaron@dsg.co.za.
- **Business target:** committed co-sponsors at £5,000 each.
