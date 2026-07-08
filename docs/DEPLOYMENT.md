# Deployment

## GitHub repo setup

- Create a new **private** repo (suggested: `dsg/atf2026-invite`).
- Push this project as the repo root (the project is fully self-contained).
- Protect `main`; PR flow optional for a site this size.

```bash
git remote add origin git@github.com:<org>/atf2026-invite.git
git push -u origin main
```

## Vercel project setup

- Import the GitHub repo in Vercel.
- **Framework preset:** Next.js
- **Root directory:** repo root (leave as `.`)
- **Output directory:** leave blank (Next.js default)
- **Install command:** `pnpm install`
- **Build command:** `pnpm build`
- No `vercel.json` — not required.

## Root directory rules

The project root is the repo root. Do not nest the app in a subfolder; if the repo layout ever changes, update Vercel's Root Directory setting to match.

## Environment variable management

- `NEXT_PUBLIC_GA_ID` — optional, per environment (Production/Preview), set in Vercel → Project → Settings → Environment Variables.
- None required for the first deploy.

## How to redeploy

- Push to `main` → Vercel auto-deploys.
- Or: Vercel dashboard → Deployments → ⋯ → **Redeploy**.
