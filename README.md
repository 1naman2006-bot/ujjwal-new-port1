# Ujjwal — Liquid Glass Portfolio

Single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run typecheck # optional TypeScript check
```

## Deploy on Vercel

1. Upload everything in this folder to a GitHub repository, **including the `src` folder**.
   Drag the `src` folder itself into GitHub's upload box (Chrome or Edge); the "choose your files" button skips folders.
   Do not upload `node_modules` or `dist`.
2. On vercel.com: **Add New → Project → Import** the repository → **Deploy**. Vercel detects Vite automatically.

## Edit the content

All text, links and video URLs are in `src/lib/content.ts`:

- **`contactEmail`** — set your email. The hero form and "Hire me" then open an email to you. While empty they show a demo message.
- **`socials`** — Instagram, Twitter and website links.
- **`hero`, `about`, `featured`, `philosophy`, `services`** — every heading, paragraph and video.

To use your own videos, put `.mp4` files in `public/videos/` and set the URL to `/videos/your-file.mp4`.

## Structure

```
src/
  pages/Index.tsx                    hero (video crossfade loop, glass navbar, email form)
  components/AboutSection.tsx
  components/FeaturedVideoSection.tsx
  components/PhilosophySection.tsx
  components/ServicesSection.tsx
  components/HeroVideo.tsx           scripted fade-in / fade-out loop
  components/LoopVideo.tsx           looping video with an animated fallback underneath
  lib/content.ts                     all editable content
  index.css                          .liquid-glass and fonts
```
