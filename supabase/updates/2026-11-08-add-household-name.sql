-- Adds support for searching the RSVP by the name used on save-the-dates
-- (e.g. "The Herr Family") in addition to individual guest names.
-- Paste into the Supabase SQL editor and run once. Additive and safe to
-- re-run -- does not touch existing data.

alter table parties add column if not exists household_name text;

-- Once you send the household-name list, Claude will generate an update
-- script (same pattern as the name-correction scripts in supabase/updates/)
-- to fill this column in for each party.
