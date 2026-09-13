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

Each pack lives in [`src/data/products.ts`](src/data/products.ts).

**Live now**

- `night-desk-hvac` → `https://calixion.gumroad.com/l/night-desk-hvac`
- `night-desk-plumbing` → `https://calixion.gumroad.com/l/night-desk-plumbing`
- `night-desk-electrical` → `https://calixion.gumroad.com/l/night-desk-electrical`
- `night-desk-roofing` → `https://calixion.gumroad.com/l/night-desk-roofing`
- `night-desk-cleaning` → `https://calixion.gumroad.com/l/night-desk-cleaning`

The other four stay `null` until Money Maker pastes a live listing.

1. Open `src/data/products.ts`.
2. Find the pack.
3. Replace `gumroadUrl: null` with the live checkout URL. Do not invent URLs.

- `null` → shop UI shows a disabled **Coming soon** button.
- a string → **Buy on Gumroad** opens that URL in a new tab.

Do not add a checkout backend. Gumroad is checkout.

## Domain

`calixbuild.com` is **not pointed yet**. Wednesday production deploy and DNS are a separate step. This repo does not configure custom domains, Vercel production domains, or grok.me.

## Legal copy

Root markdown (`privacy.md`, `terms.md`, `footer.md`) matches the live routes and uses `calix.build@gmail.com` only.
