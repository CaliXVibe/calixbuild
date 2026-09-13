export type Product = {
  slug: string;
  title: string;
  trade: string;
  summary: string;
  description: string;
  price: 39;
  /**
   * Live Gumroad checkout URL. Leave `null` until the listing is published.
   * When `null`, the UI shows a disabled “Coming soon” control.
   * When set, shop cards and detail pages show “Buy on Gumroad”.
   *
   * Guessed slug pattern (not live):
   * `https://calixion.gumroad.com/l/<slug>`
   */
  gumroadUrl: string | null;
};

export const PRODUCT_PRICE = 39;

export const products: Product[] = [
  {
    slug: "night-desk-hvac",
    title: "Night Desk: HVAC",
    trade: "HVAC",
    summary:
      "Operator prompt plus a sample after-hours no-cool lead. Instant download.",
    description:
      "A Night Desk operator pack for HVAC. You get a trade-specific operator prompt and a sample after-hours no-cool lead you can run the same night. Instant digital download — no field work, no subscription backend.",
    price: 39,
    gumroadUrl: "https://calixion.gumroad.com/l/night-desk-hvac",
  },
  {
    slug: "night-desk-plumbing",
    title: "Night Desk: Plumbing",
    trade: "Plumbing",
    summary:
      "Operator prompt plus a sample burst-pipe lead. Instant download.",
    description:
      "A Night Desk operator pack for plumbing. You get a trade-specific operator prompt and a sample burst-pipe / no-water lead you can run the same night. Instant digital download — checkout on Gumroad when the listing is live.",
    price: 39,
    gumroadUrl: "https://calixion.gumroad.com/l/night-desk-plumbing",
  },
  {
    slug: "night-desk-electrical",
    title: "Night Desk: Electrical",
    trade: "Electrical",
    summary:
      "Operator prompt plus a sample no-power lead. Instant download.",
    description:
      "A Night Desk operator pack for electrical. You get a trade-specific operator prompt and a sample after-hours no-power / breaker lead you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: "https://calixion.gumroad.com/l/night-desk-electrical",
  },
  {
    slug: "night-desk-roofing",
    title: "Night Desk: Roofing",
    trade: "Roofing",
    summary:
      "Operator prompt plus a sample storm-leak lead. Instant download.",
    description:
      "A Night Desk operator pack for roofing. You get a trade-specific operator prompt and a sample storm-leak lead you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: "https://calixion.gumroad.com/l/night-desk-roofing",
  },
  {
    slug: "night-desk-cleaning",
    title: "Night Desk: Cleaning",
    trade: "Cleaning",
    summary:
      "Operator prompt plus a sample same-week clean lead. Instant download.",
    description:
      "A Night Desk operator pack for cleaning companies. You get a trade-specific operator prompt and a sample same-week / move-out clean lead you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: "https://calixion.gumroad.com/l/night-desk-cleaning",
  },
  {
    slug: "night-desk-landscaping",
    title: "Night Desk: Landscaping",
    trade: "Landscaping",
    summary:
      "Operator prompt plus a sample weekend-mow lead. Instant download.",
    description:
      "A Night Desk operator pack for landscaping. You get a trade-specific operator prompt and a sample weekend-mow / irrigation lead you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: null, // https://calixion.gumroad.com/l/night-desk-landscaping
  },
  {
    slug: "night-desk-restoration",
    title: "Night Desk: Restoration / Water Mitigation",
    trade: "Restoration",
    summary:
      "Operator prompt plus a sample water-in lead. Instant download.",
    description:
      "A Night Desk operator pack for restoration and water mitigation. You get a trade-specific operator prompt and a sample water-in lead you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: null, // https://calixion.gumroad.com/l/night-desk-restoration
  },
  {
    slug: "night-desk-mobile-auto",
    title: "Night Desk: Mobile Auto",
    trade: "Mobile Auto",
    summary:
      "Operator prompt plus a sample lockout lead. Instant download.",
    description:
      "A Night Desk operator pack for mobile auto. You get a trade-specific operator prompt and a sample lockout / jump / tire lead you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: null, // https://calixion.gumroad.com/l/night-desk-mobile-auto
  },
  {
    slug: "night-desk-property-managers",
    title: "Night Desk: Property Managers",
    trade: "Property Managers",
    summary:
      "Operator prompt plus a sample after-hours tenant ticket. Instant download.",
    description:
      "A Night Desk operator pack for property managers. You get a trade-specific operator prompt and a sample after-hours tenant ticket you can run the same night. Instant digital download.",
    price: 39,
    gumroadUrl: null, // https://calixion.gumroad.com/l/night-desk-property-managers
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price}`;
}
