# Georgia & Jordan — Wedding Website

A bespoke wedding website built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Before you deploy — checklist

### 1. Photos

Photos were copied from `C:\Users\jorda\Pictures\Jordan and Georgia Wedding photos\` into `/public/photos/` with these names:

| Filename in project | Source file |
|---|---|
| `hero.jpeg` | `Hero.jpeg` — used as the hero background (warm dark overlay applied) |
| `photo-1.jpeg` | `photo-1 .jpeg` — gender reveal, pink & blue balloons |
| `photo-2.jpeg` | `photo-2 .jpeg` — Italy sunset |
| `photo-3.jpeg` | `photo-3 .jpeg` — newborn family studio shot |

To add more gallery photos: copy them into `/public/photos/` as `photo-4.jpeg`, `photo-5.jpeg` etc., then add entries to the `photos` array in `components/Gallery.tsx`.

### 2. Fill in the [EDIT ME] placeholders

Search the project for `[EDIT ME]` — there are placeholders in:

- `components/OurStory.tsx` — story copy, years, baby's name, engagement story
- `components/Countdown.tsx` — venue name (line: `[Venue — TBC]`)
- `components/RSVP.tsx` — RSVP deadline date
- `components/Travel.tsx` — venue address, hotel names/distances, transport info, Google Maps embed

### 3. Set up RSVP → Google Sheets (Sheety)

1. Create a Google Sheet named **"Georgia And Jordan"** with a tab called **"rsvps"**
2. Add these column headers in row 1:
   `name` | `attending` | `guests` | `dietary` | `message` | `submittedAt`
3. Go to [sheety.co](https://sheety.co), sign in with Google, connect your sheet
4. Enable **POST** requests on the `rsvps` endpoint
5. Copy your Sheety URL
6. Copy `.env.local.example` → `.env.local` and paste your URL:
   ```
   SHEETY_API_URL=https://api.sheety.co/YOUR_ID/georgiaAndJordan/rsvps
   ```

> Without `SHEETY_API_URL` set, the form still works — RSVPs are just logged to the server console instead of saved. Useful for testing.

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

In the Vercel dashboard → Settings → Environment Variables, add:
```
SHEETY_API_URL = https://api.sheety.co/...
```

Then redeploy.

---

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom color tokens
- **Framer Motion** — parallax hero, scroll-triggered timeline, card-flip countdown, staggered entrances
- **yet-another-react-lightbox** — gallery lightbox
- **Google Fonts** (Cormorant Garamond + DM Sans) via `next/font`

## Color palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FEFAF4` | Main background |
| `champagne` | `#F5EDD6` | Alt section backgrounds |
| `terracotta` | `#C4714A` | Primary accent, CTAs |
| `sage` | `#8B9E77` | Secondary accent |
| `blush` | `#F2D5C8` | Soft pink details |
| `espresso` | `#2C1A0E` | Text, dark sections |
