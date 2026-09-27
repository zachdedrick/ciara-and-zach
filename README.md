# Ciara & Zach

Wedding website for Ciara Lawlor & Zach Dedrick &mdash; 21 August 2027, Castle Leslie, Glaslough, Ireland.

Built with React, TypeScript, Vite, Tailwind CSS, and Supabase; deployed on Vercel.

## Pages

Home &middot; Itinerary &middot; Travel &middot; Things to Do &middot; Registry &middot; RSVP &middot; FAQ

Each page is currently a placeholder shell (`src/pages/*.tsx`) &mdash; content to come.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase project's URL and anon key
npm run dev
```

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run `supabase/schema.sql` to create the `guests` and `rsvps` tables.
3. Copy your project's URL and anon (public) key into `.env.local` (see `.env.example`).

The site runs fine without Supabase configured &mdash; every page works except RSVP submission, which shows a notice until credentials are set.

### Uploading the guest list

The RSVP form looks a guest up by name and only shows the Rehearsal Dinner question to people flagged for it. To upload the list:

1. In Supabase, go to **Table Editor** &rarr; **guests** &rarr; **Insert** &rarr; **Import data via spreadsheet**.
2. Prepare a CSV with these columns:
   - `full_name` &mdash; exactly how the guest should type it to find themselves (e.g. `Jane Smith`)
   - `invited_to_rehearsal_dinner` &mdash; `true` or `false`
   - `plus_one_allowed` &mdash; `true` or `false` (lets that guest indicate they're bringing someone)
3. Upload it. That's it &mdash; the RSVP page reads live from this table.

RSVP responses land in the `rsvps` table, joined to `guests` by `guest_id`. View or export them from **Table Editor** &rarr; **rsvps**.

## Deploying to Vercel

1. Import this GitHub repository into Vercel.
2. Set the build command to `npm run build` and the output directory to `dist` (Vercel usually detects this automatically for Vite).
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as Environment Variables in the Vercel project settings, matching your `.env.local`.
4. Deploy.

`vercel.json` already rewrites all routes to `index.html` so client-side routing (React Router) works correctly on refresh/direct links.

## Adding real content later

- Photos of Ciara & Zach: drop files in `src/assets/photos/` and swap them into `PhotoPlaceholder` components (see `src/assets/README.md`).
- Watercolor artwork of Castle Leslie / Irish scenery: drop files in `src/assets/watercolor/` and wire into `PageHeader`, `Home`, and `WatercolorDivider`.
- Page copy: fill in `src/pages/Itinerary.tsx`, `Travel.tsx`, `ThingsToDo.tsx`, `Registry.tsx`, and `FAQ.tsx`.
