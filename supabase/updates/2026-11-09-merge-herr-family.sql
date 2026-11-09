-- Merges Sheila, John, Natalie, Allison, and Lizzie Herr into one party
-- (Sheila & John's existing party), so searching any of the 5 names -- or
-- "The Herr Family" -- shows all 5 together and any of them can RSVP for
-- the whole group.
--
-- Natalie's plus-one, Jason, is intentionally left in his own party (not
-- yet confirmed whether he's being invited) -- only Natalie moves.
--
-- Run this AFTER updates/2026-11-08-add-household-name.sql (adds the
-- household_name column) if you haven't already run that one.
--
-- Safe to re-run: each step is idempotent (updates/deletes by exact id).

-- Move Natalie, Allison, and Lizzie into Sheila & John's party.
update guests set party_id = '75f89b21-b02f-4156-b177-b64968229477'
  where id in (
    '12ea5f09-7697-4f56-bb22-6e6ee98ace32', -- Natalie Herr
    'b0118f8b-d586-4061-964a-c2c36ef48e9e', -- Allison Herr
    '7eaa259e-1374-4666-bc41-a6634a9694a7'  -- Lizzie Herr
  );

-- Name the combined household so "The Herr Family" is searchable too.
update parties set household_name = 'The Herr Family'
  where id = '75f89b21-b02f-4156-b177-b64968229477';

-- Clean up the now-empty parties Allison and Lizzie used to belong to.
-- (Natalie's old party is NOT deleted -- Jason is still in it.)
delete from parties where id in (
  '89ee920f-80c9-47cc-bd90-f5e0a0469dfb', -- Allison's old solo party
  '2bed6db5-d600-4c05-a028-8247674e11ea'  -- Lizzie's old solo party
);
