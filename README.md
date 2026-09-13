# CaliX.Build

Studio site for **Cali X Desk** — Night Desk operator packs sold through Gumroad.

Stack: Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui.

Public contact is **calix.build@gmail.com** only.

## Local

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, what Night Desk is, shop + contact CTAs |
| `/shop` | All nine Night Desk packs at $39 |
| `/shop/[slug]` | Pack detail |
| `/privacy` | Privacy Policy (`#opt-out` works) |
| `/terms` | Terms of Service |
| `/do-not-sell` | California do-not-sell / opt-out |

## Paste Gumroad URLs

Listings are not live yet. Each pack lives in [`src/data/products.ts`](src/data/products.ts).

1. Open `src/data/products.ts`.
2. Find the pack (`night-desk-hvac`, `night-desk-plumbing`, …).
3. Replace `gumroadUrl: null` with the live checkout URL.

Example:

```ts
gumroadUrl: "https://calixion.gumroad.com/l/night-desk-hvac",
```

Guessed slug pattern (placeholder only): `https://calixion.gumroad.com/l/<slug>`.

- `null` → shop UI shows a disabled **Coming soon** button.
- a string → **Buy on Gumroad** opens that URL in a new tab.

Do not add a checkout backend. Gumroad is checkout.

## Domain

`calixbuild.com` is **not pointed yet**. Wednesday production deploy and DNS are a separate step. This repo does not configure custom domains, Vercel production domains, or grok.me.

## Legal copy

Root markdown (`privacy.md`, `terms.md`, `footer.md`) matches the live routes and uses `calix.build@gmail.com` only.
