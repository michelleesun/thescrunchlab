# The ScrunchLab

A production-ready, front-end-only brand website for **The ScrunchLab** —
sustainable scrunchies and DIY sewing kits made from rescued fabric.

> This is a brand experience site, not an e-commerce store. There is no
> cart, checkout, or payment processing. Ordering happens off-platform:
> product pages point customers to Instagram DM or email, and the contact
> form is a UI you can wire up to an email service or form backend later.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll-in animation and transitions

## Pages

- `/` — Home (hero, mission, featured products, sustainability impact, how it works, testimonials, sponsor, Instagram grid)
- `/shop` — Product grid
- `/shop/[slug]` — Product detail (gallery, description, price, sustainability note, FAQ, How to Order)
- `/about` — Brand story, mission, why sewing matters, textile waste
- `/learn` — Sewing basics, sustainability tips, future DIY ideas
- `/contact` — Instagram, email, contact form (UI only)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
```

### 4. Run the production build locally (optional)

```bash
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration needed.
4. Click **Deploy**.

Or, using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Editing Content

- **Products**: `lib/products.ts` — name, price, description, gallery images, FAQs.
- **Images**: `public/images/` — swap in new photography any time; components use `next/image` for automatic optimization.
- **Colors & fonts**: `tailwind.config.ts` (blush / sage / clay / cream palette, Fraunces + Inter fonts).
- **Copy**: each page lives in `app/<page>/page.tsx`.

## Notes on Dependencies

This project pins `next@14.2.35`, the latest patched release on the Next.js
14 line. A few advisories affecting i18n middleware, WebSocket upgrades, and
the image-optimization API remain open upstream for the 14.x line and are
only resolved by moving to Next 16 (a breaking change involving async
`params`/`searchParams`). None of the affected surfaces (i18n routing,
WebSocket proxying) are used in this project. Re-run `npm audit` before a
production launch and consider upgrading if your deployment target needs it.
