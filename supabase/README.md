# Guest list & RSVP setup

**One-time setup** (or whenever rebuilding the database from scratch):
1. Run `schema.sql` in the Supabase SQL editor. This creates `parties`, `guests`, `rsvps`, and `pre_rsvp_responses`, and drops any old versions of those tables first.
2. Run `seed_guests.sql` in the Supabase SQL editor to load the initial guest list.

**`guest-list.json`** is the source of truth for who's invited, checked into this repo so it persists across sessions. Each entry is one party (couple, family, "+guest" pair) with its members. `seed_guests.sql` is generated from this file.

## Updating the guest list later

Send Claude the updated list (grouped by party, same as before). Claude will:
1. Diff it against `guest-list.json`.
2. Update `guest-list.json` with the changes.
3. Hand you a small SQL snippet (new `insert`/`update` statements only, not the whole list) to paste into the Supabase SQL editor.

## Rehearsal Dinner invitees

Every guest currently has `invited_to_rehearsal_dinner = false` by default, since that list hasn't been provided yet. Once you send it, Claude will generate an `update` statement to flip the right guests to `true` — it only shows the extra question on the RSVP form for guests where this is `true`.

## Notes

- A party's shared contact email and message (collected on the official RSVP form) live on the `parties` table, not per-guest.
- The soft/pre-RSVP questionnaire and the official RSVP both look guests up by name against the same `guests` table, so the same party grouping is used for both.
